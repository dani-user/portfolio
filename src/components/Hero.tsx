
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      {/* Abstract geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -left-32 w-64 h-64 border border-cyan-500/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 border border-purple-500/20 rounded-full"
        />
        
        {/* Floating icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 text-cyan-400/30"
        >
          <Code size={32} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/6 text-purple-400/30"
        >
          <Zap size={28} />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 text-pink-400/30"
        >
          <Sparkles size={24} />
        </motion.div>
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div className="relative mb-6">
            <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
              <motion.span
                variants={letterVariants}
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black tracking-tight leading-none"
                style={{
                  textShadow: '0 0 60px rgba(0, 255, 255, 0.3)',
                }}
              >
                ZELALEM
              </motion.span>
              {/* <motion.span
                variants={letterVariants}
                className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-black tracking-tight leading-none"
                style={{
                  textShadow: '0 0 60px rgba(255, 0, 255, 0.3)',
                }}
              >
                DEVELOPER
              </motion.span> */}
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto w-32 rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl" />
          <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-2xl md:text-3xl text-white mb-4 leading-relaxed font-light">
              Full-Stack Developer crafting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                digital experiences
              </span>{' '}
              that transcend reality
            </p>
            <p className="text-lg text-gray-300 font-light">
              Specializing in React, Node.js, and next-generation web technologies
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/projects">
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 25px 50px rgba(0, 245, 255, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300"
      >
        <span className="relative z-10">Explore My Universe</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
</Link>
         <Link to="/contact">
  <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)"
    }}
    whileTap={{ scale: 0.95 }}
    className="px-10 py-4 border-2 border-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
    style={{
      borderImage: 'linear-gradient(45deg, #00f5ff, #8a2be2) 1'
    }}
  >
    Contact Me
  </motion.button>
</Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <ArrowDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
