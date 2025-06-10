
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const About = () => {
const timeline = [
  {
    year: '2025 (Expected)',
    title: 'BSc in Information Technology Graduate',
    company: 'Bahir Dar University',
    description: 'Successfully completed degree with specialization in full-stack development. Awarded entrepreneurship training opportunity in Senegal (one of only 10 selected from university).',
  },
  {
    year: '2025',
    title: 'Final Year Project (Excellent Grade)',
    company: 'Bahir Dar University',
    description: 'Developed AI-based Tour Guide System using MERN stack - integrated machine learning for personalized recommendations and natural language processing for interactive guidance.',
  },
  {
    year: '2024',
    title: 'ICT4D Research Intern',
    company: 'ICT for Development Company',
    description: 'Internship focusing on developing technology solutions for social impact. Gained practical experience in implementing MERN stack applications for development projects.',
  },
  {
    year: '2024',
    title: 'Mobile App Developer',
    company: 'Academic Project',
    description: 'Built "University Explorer" React Native application featuring: Campus navigation, Event calendar, Faculty directory, and Student resource portal.',
  },
  {
    year: '2023-2025',
    title: 'Active Member & Contributor',
    company: 'University Computing Association',
    description: 'Organized hackathons, led workshops on web development, and mentored junior students in programming fundamentals.',
  },
  {
    year: '2023',
    title: 'Full-Stack Developer',
    company: 'Academic Project',
    description: 'Student Management System with: Admin dashboard, Attendance tracking, Grade management, and Real-time notifications using MERN stack (MongoDB Atlas, Express.js, React, Node.js).',
  },
  {
    year: '2021',
    title: 'IT Degree Commencement',
    company: 'Bahir Dar University',
    description: 'Began Bachelor of Science program with courses in: Data Structures, Algorithms, Database Systems, and Software Engineering.',
  },
];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
  I'm Zelalem, a passionate IT student at Bahir Dar University 
  specializing in MERN stack development. With hands-on experience 
  in React, Node.js, and MongoDB, I build modern web applications
   that solve real-world problems.
</p>
<p className="text-lg text-gray-400 leading-relaxed">
  My approach blends technical skills with user-focused design, 
  creating efficient and intuitive digital experiences.
   I'm particularly interested in full-stack development
    and cross-platform mobile solutions using React Native.
</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-bold mb-8 text-center text-white"
          >
            My Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="relative flex items-start mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-cyan-400 font-bold">{item.year}</span>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
