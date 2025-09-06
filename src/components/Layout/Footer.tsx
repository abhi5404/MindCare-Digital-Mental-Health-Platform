import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const helplines = [
    { name: 'National Suicide Prevention', number: '988', available: '24/7' },
    { name: 'Crisis Text Line', number: 'Text HOME to 741741', available: '24/7' },
    { name: 'SAMHSA Helpline', number: '1-800-662-4357', available: '24/7' },
  ];

  const resources = [
    { name: 'Student Resources', href: '/resources' },
    { name: 'Emergency Help', href: '/emergency' },
    { name: 'Find a Counsellor', href: '/counsellors' },
    { name: 'About Mental Health', href: '/about' },
  ];

  const social = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-red-600 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Phone className="h-6 w-6 mr-2" />
            Emergency Helplines
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {helplines.map((helpline, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold">{helpline.name}</p>
                <p className="text-2xl font-bold">{helpline.number}</p>
                <p className="text-sm opacity-90">{helpline.available}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">MindCare</span>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive mental health support for students in higher education.
              Your wellbeing is our priority.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@mindcare.edu
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                1-800-MINDCARE
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Available at 500+ Universities
              </div>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Access */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Emergency Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Book Counselling
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Mood Check-in
              </motion.button>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              {social.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400">
                🔒 Your privacy is protected. All conversations are confidential 
                and comply with HIPAA standards.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MindCare. All rights reserved. | Built for student wellbeing 💜</p>
        </div>
      </div>
    </footer>
  );
}