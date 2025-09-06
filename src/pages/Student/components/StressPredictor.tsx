import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Calendar, TrendingDown, Brain, Clock, Target, Zap, Shield } from "lucide-react";

export default function StressPredictor() {
  const [stressLevel] = useState(35); // percentage
  
  const stressHistory = [
    { day: 'Mon', level: 45, mood: 7 },
    { day: 'Tue', level: 38, mood: 8 },
    { day: 'Wed', level: 52, mood: 6 },
    { day: 'Thu', level: 41, mood: 7 },
    { day: 'Fri', level: 35, mood: 8 },
    { day: 'Sat', level: 28, mood: 9 },
    { day: 'Sun', level: 35, mood: 8 },
  ];

  const upcomingEvents = [
    { 
      id: 1, 
      text: "Data Structures Exam", 
      date: "Sept 10", 
      stressImpact: "High",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      icon: AlertTriangle
    },
    { 
      id: 2, 
      text: "Psychology Assignment", 
      date: "Sept 12", 
      stressImpact: "Medium",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      icon: Calendar
    },
    { 
      id: 3, 
      text: "Group Project Presentation", 
      date: "Sept 15", 
      stressImpact: "High",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      icon: Target
    },
  ];

  const recommendations = [
    {
      title: "Guided Breathing Exercise",
      description: "5-minute session to reduce immediate stress",
      duration: "5 min",
      effectiveness: "High",
      icon: Brain,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Study Break Meditation",
      description: "Perfect for between intensive study sessions",
      duration: "10 min",
      effectiveness: "High",
      icon: Clock,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Release physical tension and mental stress",
      duration: "15 min",
      effectiveness: "Medium",
      icon: Zap,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const getStressLevel = (level: number) => {
    if (level < 30) return { text: 'Low', color: 'text-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20' };
    if (level < 60) return { text: 'Moderate', color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' };
    if (level < 80) return { text: 'High', color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20' };
    return { text: 'Critical', color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-900/20' };
  };

  const stressInfo = getStressLevel(stressLevel);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mr-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          Stress Analysis & Insights
        </h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <TrendingDown className="h-4 w-4 text-emerald-600" />
          <span>15% decrease this week</span>
        </div>
      </div>

      {/* Current Stress Level */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${stressInfo.bgColor} rounded-3xl p-8 mb-8 border border-white/20 dark:border-gray-600/30`}
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
            Current Stress Level
          </h4>
          <div className={`px-4 py-2 ${stressInfo.bgColor} ${stressInfo.color} rounded-full font-semibold border border-white/20 dark:border-gray-600/30`}>
            {stressInfo.text}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Low</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{stressLevel}%</span>
            <span>High</span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stressLevel}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-6 rounded-full ${
                  stressLevel < 30 ? "bg-gradient-to-r from-emerald-400 to-emerald-600" :
                  stressLevel < 60 ? "bg-gradient-to-r from-yellow-400 to-orange-500" :
                  stressLevel < 80 ? "bg-gradient-to-r from-orange-500 to-red-500" :
                  "bg-gradient-to-r from-red-500 to-red-700"
                }`}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              Based on your recent patterns
            </span>
            <span className="text-emerald-600 font-semibold">
              -15% from last week
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stress History Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/20 dark:border-gray-700/30"
      >
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Weekly Stress Trends
        </h4>
        
        <div className="grid grid-cols-7 gap-4">
          {stressHistory.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                {day.day}
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-end justify-center p-1">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(day.level / 100) * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className={`w-full rounded-sm ${
                      day.level < 30 ? "bg-emerald-500" :
                      day.level < 60 ? "bg-yellow-500" :
                      day.level < 80 ? "bg-orange-500" :
                      "bg-red-500"
                    }`}
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {day.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/20 dark:border-gray-700/30"
      >
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Calendar className="h-7 w-7 mr-3 text-purple-600" />
          Upcoming Stress Events
        </h4>
        
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ x: 4 }}
              className={`${event.bgColor} p-6 rounded-2xl border border-white/20 dark:border-gray-600/30 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${event.bgColor} border border-white/20 dark:border-gray-600/30`}>
                    <event.icon className={`h-6 w-6 ${event.color}`} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white text-lg">
                      {event.text}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {event.date}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 ${event.bgColor} ${event.color} rounded-full text-sm font-semibold border border-white/20 dark:border-gray-600/30`}>
                  {event.stressImpact} Impact
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30"
      >
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Shield className="h-7 w-7 mr-3 text-emerald-600" />
          Recommended Actions
        </h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-800/50 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-600/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${rec.color} text-white`}>
                  <rec.icon className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white">
                    {rec.title}
                  </h5>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full font-semibold">
                      {rec.effectiveness} Effectiveness
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {rec.duration}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {rec.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${rec.color} text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2`}
              >
                <Zap className="h-4 w-4" />
                <span>Start Now</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Warning */}
      {stressLevel > 70 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 max-w-sm bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 backdrop-blur-sm text-red-700 dark:text-red-200 px-6 py-4 rounded-2xl shadow-xl border border-red-200/50 dark:border-red-700/30 flex items-center space-x-3"
        >
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <span className="text-sm font-semibold">
            High stress detected. Consider reaching out for support.
          </span>
        </motion.div>
      )}
    </div>
  );
}
