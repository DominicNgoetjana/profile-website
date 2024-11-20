import { useEffect, useRef } from 'react';

export default function HexagonBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let hexagons = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Hexagon class
    class Hexagon {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 10; 
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5, 
          y: (Math.random() - 0.5) * 0.5  
        };
        this.opacity = Math.random() * 0.15 + 0.1;
        this.connections = [];
      }

      draw() {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = this.x + this.size * Math.cos(angle);
          const y = this.y + this.size * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bounce off edges with some padding
        const padding = this.size;
        if (this.x < padding || this.x > canvas.width - padding) this.velocity.x *= -1;
        if (this.y < padding || this.y > canvas.height - padding) this.velocity.y *= -1;

        this.connections = [];
      }

      findConnections(hexagons) {
        for (let hexagon of hexagons) {
          if (hexagon === this) continue;
          const distance = Math.hypot(this.x - hexagon.x, this.y - hexagon.y);
          if (distance < 150) { 
            this.connections.push({
              point: hexagon,
              opacity: (1 - distance / 150) * 0.1
            });
          }
        }
      }
    }

    // Initialize hexagons with grid-like positioning
    const init = () => {
      hexagons = [];
      const spacing = 100; 
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Add some randomness to the grid position
          const x = col * spacing + (Math.random() - 0.5) * spacing * 0.5;
          const y = row * spacing + (Math.random() - 0.5) * spacing * 0.5;
          // Offset every other row
          const offset = row % 2 === 0 ? spacing / 2 : 0;
          
          hexagons.push(new Hexagon(x + offset, y));
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw hexagons
      hexagons.forEach(hexagon => {
        hexagon.update();
        hexagon.findConnections(hexagons);
      });

      // Draw connections
      hexagons.forEach(hexagon => {
        hexagon.connections.forEach(connection => {
          ctx.beginPath();
          ctx.moveTo(hexagon.x, hexagon.y);
          ctx.lineTo(connection.point.x, connection.point.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
        hexagon.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
}
