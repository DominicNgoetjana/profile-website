import { motion } from 'framer-motion';

const Background = () => {
  const circles = Array(20).fill(null);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {circles.map((_, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomScale = 0.5 + Math.random() * 1.5;
        const randomRotation = Math.random() * 360;
        const randomDelay = Math.random() * 2;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: '30vmin',
              height: '30vmin',
              transform: `scale(${randomScale}) rotate(${randomRotation}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.02, 0.04, 0.02],
              rotate: [randomRotation, randomRotation + 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/5 to-secondary/5" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Background;
