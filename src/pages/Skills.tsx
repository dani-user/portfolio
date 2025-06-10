
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'FastAPI', level: 80 },
      ],
    },
    {
      title: 'Database',
     skills: [
    { name: 'MongoDB', level: 88 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Firebase', level: 82 },
    { name: 'Supabase', level: 80 },
],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 95 },
        { name: 'Figma', level: 78 },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            My Skills
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
                
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
