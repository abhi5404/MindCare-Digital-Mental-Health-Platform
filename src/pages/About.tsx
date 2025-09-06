import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Award, 
  Shield, 
  DollarSign, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building,
  Handshake,
  Zap
} from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Students Supported', value: '50,000+', icon: Users },
    { label: 'Partner Universities', value: '500+', icon: Building },
    { label: 'Success Rate', value: '94%', icon: TrendingUp },
    { label: 'Countries', value: '25+', icon: Globe },
  ];

  const features = [
    'AI-powered mental health screening',
    'Anonymous counselling sessions',
    'Multilingual support (12+ languages)',
    'Peer buddy matching system',
    'Academic stress prediction',
    'Offline resource access',
    '24/7 crisis intervention',
    'HIPAA-compliant data security',
  ];

  const businessModel = [
    {
      title: 'Freemium SaaS Model',
      price: '₹0 - ₹200/student/year',
      description: 'Basic features free, premium wellness content and advanced AI features available through subscription',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enterprise & Government',
      price: 'Custom Pricing',
      description: 'B2B partnerships with universities, government initiatives, and CSR programs',
      icon: Building,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Marketplace Revenue',
      price: '15-20% Commission',
      description: 'Revenue sharing from therapy sessions, wellness workshops, and peer mentorship programs',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API & White-label',
      price: '$10,000 - $50,000',
      description: 'Licensing our mental health technology to EdTech companies and healthcare providers',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const partnerships = [
    {
      category: 'Government & NGOs',
      partners: ['Ministry of Health', 'UNICEF', 'WHO', 'National Mental Health Program']
    },
    {
      category: 'Educational',
      partners: ['IITs', 'IIMs', 'State Universities', 'NAAC', 'UGC']
    },
    {
      category: 'Healthcare',
      partners: ['Apollo Hospitals', 'Max Healthcare', 'Fortis', 'Local Counselling Centers']
    },
    {
      category: 'Technology',
      partners: ['Microsoft AI', 'Google Cloud', 'AWS', 'OpenAI']
    }
  ];

  const roadmap = [
    {
      phase: 'Phase 1 (2025)',
      title: 'Foundation & MVP',
      items: ['Launch core platform', 'Partner with 100 universities', 'Onboard 10,000 students']
    },
    {
      phase: 'Phase 2 (2025-2026)',
      title: 'Scale & Expand',
      items: ['International expansion', 'VR/AR integration', 'Corporate wellness add-on']
    },
    {
      phase: 'Phase 3 (2026+)',
      title: 'Market Leadership',
      items: ['Global partnerships', 'Policy integration', 'IPO preparation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-green-600/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Student Mental Health
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              MindCare is revolutionizing mental health support in higher education through AI-powered technology, 
              culturally sensitive content, and anonymous peer support systems.
            </p>
          </motion.div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
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

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We believe every student deserves access to comprehensive mental health support. 
                Our platform combines cutting-edge AI technology with human empathy to create 
                a safe, anonymous, and culturally sensitive environment for mental wellness.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From exam stress to life transitions, from loneliness to anxiety - we're here 
                to support students through every challenge of their academic journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sustainable Business Model
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our multi-revenue stream approach ensures sustainability while keeping core mental health 
              support accessible to all students regardless of economic background.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessModel.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${model.color} rounded-2xl mb-6`}>
                  <model.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {model.title}
                </h3>
                
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">
                  {model.price}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Collaborating with leading institutions, healthcare providers, and technology companies 
              to create a comprehensive mental health ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {partnership.category}
                </h3>
                <ul className="space-y-2">
                  {partnership.partners.map((partner, partnerIndex) => (
                    <li key={partnerIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                      • {partner}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Growth Roadmap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our strategic plan for scaling impact and transforming student mental health globally.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-purple-600">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-purple-100 dark:border-gray-600 h-full">
                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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
              Join the Mental Health Revolution
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Whether you're a student seeking support, a university looking to improve student wellbeing, 
              or an investor interested in social impact - we'd love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}