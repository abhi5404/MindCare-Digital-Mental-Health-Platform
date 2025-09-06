import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mic, Sparkles, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export function MoodTracker() {
  const [mood, setMood] = useState(7);
  const [note, setNote] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const moods = [
    { value: 1, emoji: '😢', label: 'Very Sad', color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20' },
    { value: 2, emoji: '😞', label: 'Sad', color: 'text-red-400', bgColor: 'bg-red-50 dark:bg-red-900/20' },
    { value: 3, emoji: '😐', label: 'Okay', color: 'text-yellow-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { value: 4, emoji: '🙂', label: 'Good', color: 'text-green-400', bgColor: 'bg-green-50 dark:bg-green-900/20' },
    { value: 5, emoji: '😊', label: 'Great', color: 'text-green-500', bgColor: 'bg-green-50 dark:bg-green-900/20' },
  ];

  const getMoodDescription = (moodValue: number) => {
    if (moodValue <= 2) return { text: 'Struggling', color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-900/20' };
    if (moodValue <= 4) return { text: 'Okay', color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' };
    if (moodValue <= 6) return { text: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' };
    if (moodValue <= 8) return { text: 'Great', color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' };
    return { text: 'Excellent', color: 'text-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20' };
  };

  const getMoodEmoji = (moodValue: number) => {
    if (moodValue <= 2) return '😢';
    if (moodValue <= 4) return '😐';
    if (moodValue <= 6) return '🙂';
    if (moodValue <= 8) return '😊';
    return '😄';
  };

  const handleSaveMood = () => {
    toast.success('Mood saved successfully!', {
      icon: '💾',
    });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.success('Recording started...', { icon: '🎤' });
    } else {
      toast.success('Recording stopped and saved!', { icon: '⏹️' });
    }
  };

  const moodDesc = getMoodDescription(mood);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl mr-4">
            <Heart className="h-8 w-8 text-white" />
          </div>
          Daily Mood Check-in
        </h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span>Last updated: 2 hours ago</span>
        </div>
      </div>

      {/* Mood Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            How are you feeling today?
          </label>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-600">+0.8 from yesterday</span>
          </div>
        </div>
        
        <div className="relative mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">😢</span>
            <div className="flex-1 mx-6 relative">
              <input
                type="range"
                min="1"
                max="10"
                value={mood}
                onChange={(e) => setMood(parseInt(e.target.value))}
                className="w-full h-4 bg-gradient-to-r from-red-200 via-yellow-200 to-emerald-200 dark:from-red-800 dark:via-yellow-800 dark:to-emerald-800 rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #f97316 20%, #eab308 40%, #22c55e 60%, #16a34a 80%, #059669 100%)`
                }}
              />
              <div 
                className="absolute top-0 h-4 bg-white dark:bg-gray-200 rounded-full shadow-lg border-2 border-white dark:border-gray-300 transform -translate-y-1"
                style={{ 
                  left: `calc(${((mood - 1) / 9) * 100}% - 8px)`,
                  width: '16px'
                }}
              />
            </div>
            <span className="text-3xl">😊</span>
          </div>
        </div>

        <div className="text-center">
          <motion.div
            key={mood}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`inline-flex items-center space-x-4 ${moodDesc.bgColor} px-8 py-4 rounded-2xl border border-white/20 dark:border-gray-600/30 shadow-lg`}
          >
            <span className="text-5xl">{getMoodEmoji(mood)}</span>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {mood}/10
              </div>
              <div className={`text-lg font-semibold ${moodDesc.color}`}>
                {moodDesc.text}
              </div>
            </div>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </motion.div>
        </div>
      </div>

      {/* Quick Mood Selection */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Or select a quick mood:
        </label>
        <div className="grid grid-cols-5 gap-3">
          {moods.map((moodOption) => (
            <motion.button
              key={moodOption.value}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMood(moodOption.value * 2)}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                Math.floor(mood / 2) === moodOption.value
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-lg'
                  : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              <div className="text-3xl mb-2">{moodOption.emoji}</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {moodOption.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Text Note */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          What's on your mind? (optional)
        </label>
        <div className="relative">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write about your feelings, what happened today, or anything you'd like to remember..."
            className="w-full p-6 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white resize-none text-base leading-relaxed shadow-sm hover:shadow-md transition-all duration-300"
            rows={4}
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {note.length}/500
          </div>
        </div>
      </div>

      {/* Voice Note */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Voice Journal
        </label>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleRecording}
            className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
              isRecording 
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
            }`}
          >
            <Mic className={`h-6 w-6 ${isRecording ? 'animate-pulse' : ''}`} />
            <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
          </motion.button>
          
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-3 text-red-600 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-xl"
            >
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Recording...</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSaveMood}
        className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <CheckCircle2 className="h-6 w-6" />
        <span>Save Check-in</span>
        <Sparkles className="h-5 w-5" />
      </motion.button>
    </div>
  );
}