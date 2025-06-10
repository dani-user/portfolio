
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './zel.jpeg'; // Import the logo image


const AboutPreview = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      id="about-preview"
      style={{ opacity }}
      className="py-32 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">  
  I'm a final-year IT student at Bahir Dar University specializing in 
  full-stack (MERN) and mobile development. Skilled in React, Node.js,
   Express, MongoDB, and React Native, I build responsive web apps and 
   cross-platform mobile solutions. I focus on clean architecture, RESTful APIs, 
   and intuitive UI design while exploring cloud deployment and real-time technologies. 
   Passionate about turning ideas into functional, user-friendly applications.  
</p>  
              <p className="text-lg text-gray-400 leading-relaxed">
                My expertise spans across modern JavaScript frameworks, cloud technologies, 
                and everything in between. I'm always excited to learn new technologies 
                and tackle challenging projects.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="relative bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
      <div className="text-center">
      <div className="w-90 h-90 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-1 flex items-center justify-center overflow-hidden">
          <img
            src={logo}
            alt="Zelalem Tadese Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">Zelalem Tadese</h3>
        <p className="text-gray-300 mb-1">Full-Stack Developer</p>
        <p className="text-gray-400">Creating digital experiences</p>
      </div>
    </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPreview;
