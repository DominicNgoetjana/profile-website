import HexagonBackground from './HexagonBackground';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-dark">
      <HexagonBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
