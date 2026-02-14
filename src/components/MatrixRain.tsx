import { useEffect, useRef, useState } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMatrixEvent = (e: any) => {
      setIsActive(e.detail.active);
    };

    window.addEventListener("matrix-rain", handleMatrixEvent);
    return () => window.removeEventListener("matrix-rain", handleMatrixEvent);
  }, []);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Detect if the html element has the 'light' class
      const isLight = document.documentElement.classList.contains('light');

      ctx.fillStyle = isLight ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isLight ? "#050" : "#0F0"; // Darker green for light mode for better contrast
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none opacity-50"
    />
  );
};

export default MatrixRain;
