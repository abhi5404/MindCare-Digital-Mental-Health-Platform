import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Headphones, 
  Heart, 
  Download, 
  Play, 
  Globe, 
  Star,
  Filter,
  Search,
  Volume2,
  Video
} from 'lucide-react';

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'meditation', name: 'Meditation', icon: Heart },
    { id: 'yoga', name: 'Yoga', icon: Heart },
    { id: 'breathing', name: 'Breathing', icon: Volume2 },
    { id: 'sleep', name: 'Sleep Stories', icon: Headphones },
    { id: 'stress', name: 'Stress Relief', icon: BookOpen },
    { id: 'ayurveda', name: 'Ayurveda', icon: Heart },
  ];

  const languages = [
    { id: 'all', name: 'All Languages' },
    { id: 'english', name: 'English' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'spanish', name: 'Spanish' },
    { id: 'french', name: 'French' },
    { id: 'german', name: 'German' },
    { id: 'mandarin', name: 'Mandarin' },
    { id: 'arabic', name: 'Arabic' },
    { id: 'portuguese', name: 'Portuguese' },
  ];

  const resources = [
    {
      id: 1,
      title: '10-Minute Morning Meditation',
      description: 'Start your day with clarity and calmness',
      category: 'meditation',
      language: 'english',
      duration: '10 min',
      rating: 4.8,
      downloads: 12500,
      type: 'audio',
      thumbnail: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Pranayama Breathing Exercise',
      description: 'Ancient yogic breathing techniques for stress relief',
      category: 'breathing',
      language: 'hindi',
      duration: '15 min',
      rating: 4.9,
      downloads: 8200,
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Gentle Yoga for Students',
      description: 'Perfect for dorm rooms and study breaks',
      category: 'yoga',
      language: 'english',
      duration: '20 min',
      rating: 4.7,
      downloads: 15600,
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Exam Stress Relief Meditation',
      description: 'Calm your nerves before important exams',
      category: 'meditation',
      language: 'spanish',
      duration: '12 min',
      rating: 4.6,
      downloads: 9300,
      type: 'audio',
      thumbnail: 'https://images.pexels.com/photos/3823490/pexels-photo-3823490.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Ayurvedic Sleep Ritual',
      description: 'Traditional herbs and practices for better sleep',
      category: 'ayurveda',
      language: 'english',
      duration: '25 min',
      rating: 4.8,
      downloads: 6700,
      type: 'audio',
      thumbnail: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Forest Sounds for Focus',
      description: 'Natural soundscape to enhance concentration',
      category: 'sleep',
      language: 'all',
      duration: '60 min',
      rating: 4.5,
      downloads: 22100,
      type: 'audio',
      thumbnail: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLanguage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Wellness Resources
            <span className="block text-purple-600 dark:text-purple-400">
              For Your Mind, Body & Soul
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover guided meditations, yoga sessions, breathing exercises, and wellness content 
            available in multiple languages. Download for offline access.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-sm"
        >
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Language Filter */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              {languages.map(language => (
                <option key={language.id} value={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredResources.length} resources
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {selectedLanguage !== 'all' && ` • ${languages.find(l => l.id === selectedLanguage)?.name}`}
          </p>
        </motion.div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 overflow-hidden">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${
                    resource.type === 'video' ? 'bg-red-500' : 'bg-purple-500'
                  }`}>
                    {resource.type === 'video' ? (
                      <><Video className="h-3 w-3 inline mr-1" />Video</>
                    ) : (
                      <><Volume2 className="h-3 w-3 inline mr-1" />Audio</>
                    )}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm">
                    {resource.duration}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Play className="h-8 w-8 ml-1" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium ml-1">{resource.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Download className="h-4 w-4 mr-1" />
                    <span className="text-sm">{resource.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Globe className="h-4 w-4 mr-1" />
                    <span className="text-sm capitalize">{resource.language}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Play</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No resources found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}

        {/* Featured Collections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl">
              <Heart className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Exam Season Survival</h3>
              <p className="text-purple-100 mb-4">
                Curated content to help you through stressful exam periods
              </p>
              <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Explore Collection
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-xl">
              <BookOpen className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Daily Wellness</h3>
              <p className="text-green-100 mb-4">
                Build healthy habits with our morning and evening routines
              </p>
              <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Explore Collection
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-6 rounded-xl">
              <Headphones className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sleep & Recovery</h3>
              <p className="text-blue-100 mb-4">
                Wind down and recover with sleep stories and night meditations
              </p>
              <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Explore Collection
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}