import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Github, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import Layout from '../components/Layout.jsx';
import emailjs from '@emailjs/browser';
import { supabase } from '../lib/supabaseClient.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [emailConfig, setEmailConfig] = useState(null);

  useEffect(() => {
    const fetchEmailConfig = async () => {
      try {
        const { data, error } = await supabase
          .from('emailjs_config')
          .select('service_id, admin_template_id, user_template_id, public_key')
          .eq('id', 1)
          .single();

        if (error) {
          console.error('Error fetching EmailJS config:', error);
          setSendStatus('Failed to load email configuration. Please try again later.');
          return;
        }

        if (!data) {
          console.error('No EmailJS configuration found in Supabase.');
          setSendStatus('Email configuration not found. Please contact support.');
          return;
        }

        setEmailConfig(data);
        if (data.public_key) {
          emailjs.init(data.public_key);
        }
      } catch (err) {
        console.error('Unexpected error fetching EmailJS config:', err);
        setSendStatus('An unexpected error occurred. Please try again later.');
      }
    };

    fetchEmailConfig();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    if (!emailConfig) {
      setSendStatus('Email configuration not loaded. Please try again.');
      setIsSending(false);
      return;
    }

    try {
      const { service_id, admin_template_id, user_template_id } = emailConfig;

      const adminTemplateParams = {
        from_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        admin_email: 'yalem7155@gmail.com', // Explicitly set admin email
      };

      console.log('Sending admin email:', { service_id, admin_template_id, adminTemplateParams });

      const adminResponse = await emailjs.send(service_id, admin_template_id, adminTemplateParams);

      // Normalize email for comparison
      const normalizedUserEmail = formData.email.trim().toLowerCase();
      const adminEmail = 'yalem7155@gmail.com'.toLowerCase();

      if (normalizedUserEmail !== adminEmail) {
        const userTemplateParams = {
          to_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        };

        console.log('Sending user email:', { service_id, user_template_id, userTemplateParams });

        const userResponse = await emailjs.send(service_id, user_template_id, userTemplateParams);

        if (adminResponse.status === 200 && userResponse.status === 200) {
          setSendStatus('Message sent successfully! Check your inbox for confirmation.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSendStatus('Failed to send message. Please try again.');
        }
      } else {
        console.log('Skipping user email: User email matches admin email');
        if (adminResponse.status === 200) {
          setSendStatus('Message sent successfully.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSendStatus('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSendStatus('An error occurred while sending the message. Please try again.');
    } finally {
      setIsSending(false);
    }

    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="relative min-h-screen pt-24 px-4 overflow-hidden">
        {/* Background Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-50"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        {/* Overlay to darken video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>

        <div className="relative max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-gray-300">yalem7155@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-cyan-400" size={20} />
                  <span className="text-gray-300">+251905487849</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Bahir Dar, AMHARA, Ethiopia</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Zel-alemm"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://x.com/yourprofile"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://tiktok.com/@yourprofile"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://telegram.me/yalem111"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <Send size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com/in/yourprofile"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="max-w-[500px] w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailjs"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="max-w-[500px] w-full px-5 py-8 text-white bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="messagejs" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="messagejs"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="max-w-[500px] w-full px-5 py-8 text-white bg-white/10 border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {sendStatus && (
                  <div className={`text-lg ${sendStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                    {sendStatus}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSending}
                  className={`w-full max-w-[500px] px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-200 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;