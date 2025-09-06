import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Calendar, 
  Heart, 
  TrendingUp, 
  BookOpen,
  Users,
  Brain,
  Target,
  Volume2,
  Play,
  BarChart3,
  Activity,
  Zap,
  Shield,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { MoodTracker } from './components/MoodTracker';
import ChatInterface from './components/ChatInterface';


export function StudentDashboard() {
  const [showChat, setShowChat] = useState(false);

  const quickStats = [
    { 
      label: 'Mood Score', 
      value: '7.2', 
      unit: '/10', 
      trend: '+0.8', 
      trendDirection: 'up',
      color: 'text-emerald-600', 
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      icon: Heart,
      description: 'Your overall emotional state'
    },
    { 
      label: 'Streak Days', 
      value: '12', 
      unit: ' days', 
      trend: '+3', 
      trendDirection: 'up',
      color: 'text-blue-600', 
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      icon: Target,
      description: 'Consecutive check-ins'
    },
    { 
      label: 'Sessions', 
      value: '8', 
      unit: ' total', 
      trend: '+2', 
      trendDirection: 'up',
      color: 'text-purple-600', 
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      icon: Calendar,
      description: 'Completed this month'
    },
    { 
      label: 'Stress Level', 
      value: 'Low', 
      unit: '', 
      trend: '-15%', 
      trendDirection: 'down',
      color: 'text-emerald-600', 
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      icon: TrendingUp,
      description: 'Current stress indicator'
    },
  ];

  const recentActivities = [
    { 
      type: 'Mood Check-in', 
      time: '2 hours ago', 
      status: 'Completed',
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    { 
      type: 'Meditation Session', 
      time: '1 day ago', 
      status: 'Completed',
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    { 
      type: 'AI Chat', 
      time: '2 days ago', 
      status: 'Helpful',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    { 
      type: 'Counselling Booked', 
      time: '3 days ago', 
      status: 'Scheduled',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
  ];

  const recommendations = [
    {
      title: 'Guided Breathing Exercise',
      description: '5-minute mindfulness session designed for exam stress relief',
      duration: '5 min',
      icon: Volume2,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-700 dark:text-blue-300',
      rating: 4.8,
      participants: '2.3k'
    },
    {
      title: 'Study Break Meditation',
      description: 'Perfect interlude between intensive study sessions',
      duration: '10 min',
      icon: Brain,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      rating: 4.9,
      participants: '1.8k'
    },
    {
      title: 'Sleep Story Collection',
      description: 'Calming narratives to help you drift into peaceful sleep',
      duration: '20 min',
      icon: Play,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-700 dark:text-purple-300',
      rating: 4.7,
      participants: '3.1k'
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', mood: 6, stress: 3 },
    { day: 'Tue', mood: 7, stress: 2 },
    { day: 'Wed', mood: 8, stress: 4 },
    { day: 'Thu', mood: 6, stress: 3 },
    { day: 'Fri', mood: 7, stress: 2 },
    { day: 'Sat', mood: 9, stress: 1 },
    { day: 'Sun', mood: 8, stress: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-3">
                Welcome back, Student
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                Your mental wellness journey continues today
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden lg:flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">All systems optimal</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.02 }}
              className={`${stat.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} border border-white/20 dark:border-gray-600/30`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="flex items-center space-x-1">
                  {stat.trendDirection === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-emerald-600" />
                  )}
                  <span className={`text-sm font-semibold ${stat.color}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                    {stat.unit}
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mood Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
            >
              <MoodTracker />
            </motion.div>

            {/* Weekly Progress Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <BarChart3 className="h-7 w-7 mr-3 text-indigo-600" />
                  Weekly Progress
                </h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Mood</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Stress</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-4">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                      {day.day}
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-end justify-center p-1">
                        <div 
                          className="w-full bg-emerald-500 rounded-sm transition-all duration-500"
                          style={{ height: `${(day.mood / 10) * 100}%` }}
                        ></div>
                      </div>
                      <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-end justify-center p-1">
                        <div 
                          className="w-full bg-red-500 rounded-sm transition-all duration-500"
                          style={{ height: `${(day.stress / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Activity className="h-7 w-7 mr-3 text-purple-600" />
                Recent Activities
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-600/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${activity.bgColor} border border-white/20 dark:border-gray-600/30`}>
                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {activity.type}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 ${activity.bgColor} ${activity.color} rounded-full text-sm font-semibold border border-white/20 dark:border-gray-600/30`}>
                      {activity.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="h-7 w-7 mr-3 text-yellow-600" />
                Quick Actions
              </h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowChat(true)}
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Talk to AI Assistant</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="h-6 w-6" />
                  <span>Book Counselling</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white p-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="h-6 w-6" />
                  <span>Browse Resources</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white p-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Users className="h-6 w-6" />
                  <span>Find Peer Buddy</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Sparkles className="h-7 w-7 mr-3 text-yellow-600" />
                Recommended for You
              </h3>
              <div className="space-y-6">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`${rec.bgColor} p-6 rounded-2xl border border-white/20 dark:border-gray-600/30 cursor-pointer hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${rec.color} text-white`}>
                          <rec.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                            {rec.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {rec.rating}
                              </span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {rec.participants} users
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 ${rec.textColor} bg-white/50 dark:bg-gray-700/50 rounded-full text-sm font-semibold`}>
                        {rec.duration}
                      </span>
                    </div>
                    <p className={`text-sm ${rec.textColor} mb-4 leading-relaxed`}>
                      {rec.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${rec.color} text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2`}
                    >
                      <Play className="h-4 w-4" />
                      <span>Start Session</span>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-red-200/50 dark:border-red-700/30"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Emergency Support
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                If you're experiencing a mental health crisis or need immediate support, our emergency resources are available 24/7.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Get Emergency Help</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}
