
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawAnimatedBackground = () => {
      const { width, height } = canvas;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Create flowing gradient waves
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsla(${(time * 0.5) % 360}, 70%, 50%, 0.1)`);
      gradient.addColorStop(0.5, `hsla(${(time * 0.3 + 120) % 360}, 70%, 50%, 0.2)`);
      gradient.addColorStop(1, `hsla(${(time * 0.7 + 240) % 360}, 70%, 50%, 0.1)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Animated geometric shapes
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.001 + i) * width) / 4 + width / 2;
        const y = (Math.cos(time * 0.002 + i) * height) / 4 + height / 2;
        const size = Math.sin(time * 0.003 + i) * 50 + 100;

        const shapeGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        shapeGradient.addColorStop(0, `hsla(${(time * 0.1 + i * 60) % 360}, 80%, 60%, 0.3)`);
        shapeGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = shapeGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Flowing lines
      ctx.strokeStyle = `hsla(${time * 0.2 % 360}, 70%, 50%, 0.3)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 20) {
        const y = Math.sin((x + time) * 0.01) * 50 + height / 2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      time += 1;
    };

    const animate = () => {
      drawAnimatedBackground();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-60"
      />
      {/* Abstract video-like overlay patterns */}
      <div className="fixed inset-0 z-1">
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
              'linear-gradient(135deg, transparent, rgba(255, 0, 255, 0.1), transparent)',
              'linear-gradient(225deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-cyan-500/20"
        />
      </div>
    </>
  );
};

export default VideoBackground;
