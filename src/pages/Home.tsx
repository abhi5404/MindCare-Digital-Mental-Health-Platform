import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Shield,
  Users,
  Award,
  ArrowRight,
  Star,
  Check
} from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Mental Health Copilot',
      description: 'Get instant support with our multilingual AI assistant that provides coping strategies and mental health screening.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Calendar,
      title: 'Anonymous Counselling',
      description: 'Book confidential sessions with licensed professionals. Your privacy is completely protected.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BookOpen,
      title: 'Wellness Resources',
      description: 'Access guided meditation, yoga sessions, and stress management content in 10+ languages.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Mood Tracking',
      description: 'Monitor your mental health journey with voice journaling and emotional analytics.',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const stats = [
    { label: 'Students Helped', value: '50,000+', icon: Users },
    { label: 'Universities', value: '500+', icon: Award },
    { label: 'Success Rate', value: '94%', icon: TrendingUp },
    { label: 'Available 24/7', value: '365 Days', icon: Shield },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      content: 'MindCare helped me through my toughest semester. The AI copilot was there when I needed it most.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Graduate Student',
      content: 'The anonymous booking feature gave me the confidence to seek help. Game-changing for student mental health.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Engineering Student',
      content: 'The multilingual support and cultural sensitivity made all the difference in my healing journey.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-green-600/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Your Mental Health
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  Matters Most
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital mental health support designed specifically for students. 
                Get help when you need it, how you need it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/student">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Journey
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                
                <Link to="/resources">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                  >
                    Explore Resources
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Support
              <span className="block text-purple-600 dark:text-purple-400">
                When You Need It
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with human expertise to provide 
              personalized mental health support for every student.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how MindCare has helped thousands of students improve their mental health and academic performance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-purple-100 dark:border-gray-600"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-800 dark:text-gray-200 text-lg mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to prioritize your mental health?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to better mental health. 
              Get started today - it's free and completely confidential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/student">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="inline-block mr-2 h-5 w-5" />
                Talk to AI Assistant
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}