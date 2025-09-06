import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, Eye, EyeOff, UserCheck, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      toast.success('Welcome back!', { icon: '👋' });
      
      // Redirect based on user type
      if (email.includes('admin')) {
        navigate('/admin');
      } else if (email.includes('counsellor')) {
        navigate('/counsellor');
      } else {
        navigate('/student');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const demoAccounts = [
    { type: 'student', email: 'student@demo.com', password: 'demo123' },
    { type: 'counsellor', email: 'counsellor@demo.com', password: 'demo123' },
    { type: 'admin', email: 'admin@demo.com', password: 'demo123' },
  ];

  const fillDemoAccount = (account: typeof demoAccounts[0]) => {
    setEmail(account.email);
    setPassword(account.password);
    setUserType(account.type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mx-auto h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center"
          >
            <Heart className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to MindCare
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access your mental health support platform
          </p>
        </div>

        {/* Demo Accounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
        >
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Demo Accounts (Click to fill)
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => fillDemoAccount(account)}
                className="text-xs bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-700/50 transition-colors capitalize"
              >
                {account.type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                I am a:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['student', 'counsellor', 'admin'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors capitalize ${
                      userType === type
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Signing in...
              </div>
            ) : (
              <>
                <UserCheck className="h-5 w-5 mr-2" />
                Sign in as {userType}
              </>
            )}
          </motion.button>

          {/* Privacy Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              🔒 Your privacy is our priority. All data is encrypted and HIPAA-compliant.
            </p>
          </div>
        </motion.form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Need help getting started?{' '}
            <Link to="/resources" className="text-purple-600 dark:text-purple-400 hover:underline">
              Visit our resources
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}