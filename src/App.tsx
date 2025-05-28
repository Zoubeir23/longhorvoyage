import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureStats from './components/FeatureStats';
import WeeklyPackages from './components/WeeklyPackages';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 text-gray-900 font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <FeatureStats />
                <WeeklyPackages />
              </main>
            }
          />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;