import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { EmergencyButton } from './components/Common/EmergencyButton';
import { Home } from './pages/Home';
import { StudentDashboard } from './pages/Student/StudentDashboard';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Login } from './pages/Login';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counsellor" element={<StudentDashboard />} />
                <Route path="/admin" element={<StudentDashboard />} />
              </Routes>
            </main>
            
            <Footer />
            <EmergencyButton />
            
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                className: 'dark:bg-gray-800 dark:text-white',
                style: {
                  background: 'var(--toast-bg, #fff)',
                  color: 'var(--toast-color, #374151)',
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;