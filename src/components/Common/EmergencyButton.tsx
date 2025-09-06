import React from 'react';
import { motion } from 'framer-motion';
import { Phone, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export function EmergencyButton() {
  const handleEmergencyCall = () => {
    toast.success('Connecting to emergency helpline...', {
      icon: '📞',
      duration: 3000,
    });
    // In a real app, this would connect to actual emergency services
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleEmergencyCall}
      className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <AlertCircle className="h-5 w-5 animate-pulse" />
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline">Emergency</span>
    </motion.button>
  );
}