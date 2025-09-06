# 🧠 MindCare - Digital Mental Health Platform

<div align="center">

![MindCare Logo](https://img.shields.io/badge/MindCare-Digital%20Mental%20Health-blue?style=for-the-badge&logo=heart&logoColor=white)

**A comprehensive digital mental health platform designed specifically for students**

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.0+-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Demo](https://mindcare.vercel.app) • [Documentation](#documentation) • [Contributing](#contributing) • [License](#license)

</div>

---

## 🌟 Features

### 🎯 **Student Dashboard**
- **Real-time Mood Tracking** - Interactive mood slider with intelligent categorization
- **Weekly Progress Analytics** - Visual charts showing mood and stress trends
- **AI-Powered Chat Support** - 24/7 mental health assistance
- **Stress Prediction** - Advanced algorithms to predict and manage stress levels
- **Activity Tracking** - Monitor your mental wellness journey

### 🎨 **Modern UI/UX**
- **Glass Morphism Design** - Beautiful backdrop blur effects and modern aesthetics
- **Dark/Light Mode** - Seamless theme switching
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Professional Typography** - Clean, readable font hierarchy

### 🔧 **Technical Excellence**
- **TypeScript** - Full type safety and better development experience
- **Component Architecture** - Modular, reusable React components
- **Performance Optimized** - Fast loading and smooth interactions
- **Accessibility** - WCAG compliant design patterns
- **Modern Build Tools** - Vite for lightning-fast development

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mindcare-digital-mental-health-platform.git
   cd mindcare-digital-mental-health-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

---

## 📱 Screenshots

<div align="center">

### Student Dashboard
![Student Dashboard](https://via.placeholder.com/800x400/1e293b/ffffff?text=Student+Dashboard+Preview)

### Mood Tracker
![Mood Tracker](https://via.placeholder.com/400x300/3b82f6/ffffff?text=Mood+Tracker+Interface)

### AI Chat Interface
![AI Chat](https://via.placeholder.com/400x300/8b5cf6/ffffff?text=AI+Chat+Support)

</div>

---

## 🏗️ Project Structure

```
mindcare-digital-mental-health-platform/
├── src/
│   ├── components/
│   │   ├── Common/
│   │   │   └── EmergencyButton.tsx
│   │   └── Layout/
│   │       ├── Footer.tsx
│   │       └── Navbar.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── Student/
│   │   │   ├── components/
│   │   │   │   ├── ChatInterface.tsx
│   │   │   │   ├── MoodTracker.tsx
│   │   │   │   └── StressPredictor.tsx
│   │   │   └── StudentDashboard.tsx
│   │   ├── About.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Resources.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready motion library for React
- **React Router** - Declarative routing for React applications
- **React Hot Toast** - Beautiful, customizable toast notifications
- **Lucide React** - Beautiful & consistent icon toolkit

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🎨 Design System

### Color Palette
- **Primary**: Indigo/Purple gradients for main actions
- **Secondary**: Emerald/Teal for success states
- **Accent**: Blue for information and links
- **Warning**: Orange/Red for alerts and warnings
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, gradient text with proper hierarchy
- **Body**: Clean, readable fonts with optimal line spacing
- **Code**: Monospace fonts for technical content

### Components
- **Cards**: Rounded corners with subtle shadows and borders
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean inputs with focus states and validation
- **Modals**: Backdrop blur with smooth animations

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the SPA

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linting checks pass

---

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized and tree-shaken

---

## 🔒 Security

- **HTTPS Only** - All communications encrypted
- **No Data Storage** - Client-side only, no personal data stored
- **Privacy First** - Anonymous usage, no tracking
- **Secure Dependencies** - Regularly updated packages

---

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Student Dashboard
- ✅ Mood Tracking
- ✅ AI Chat Interface
- ✅ Stress Prediction
- ✅ Responsive Design

### Phase 2 (Upcoming)
- [ ] Counselor Dashboard
- [ ] Admin Panel
- [ ] Mobile App (React Native)
- [ ] Advanced Analytics
- [ ] Group Therapy Features

### Phase 3 (Future)
- [ ] Machine Learning Integration
- [ ] Wearable Device Support
- [ ] Multi-language Support
- [ ] Advanced Reporting
- [ ] API for Third-party Integration

---

## 📞 Support

- **Documentation**: [View Docs](https://mindcare.vercel.app/docs)
- **Issues**: [GitHub Issues](https://github.com/yourusername/mindcare-digital-mental-health-platform/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/mindcare-digital-mental-health-platform/discussions)
- **Email**: support@mindcare.app

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Vite** - For the lightning-fast build tool

---

<div align="center">

**Made with ❤️ for student mental health**

[⭐ Star this repo](https://github.com/yourusername/mindcare-digital-mental-health-platform) • [🐛 Report Bug](https://github.com/yourusername/mindcare-digital-mental-health-platform/issues) • [💡 Request Feature](https://github.com/yourusername/mindcare-digital-mental-health-platform/issues)

</div>
