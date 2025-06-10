
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ParticleBackground from './ParticleBackground';
import ThemeToggle from './ThemeToggle';
import VideoBackground from './VideoBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black">
      <VideoBackground />
      <ParticleBackground />
      
      <div className="relative z-10">
        <Navigation />
        <ThemeToggle />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
