import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={to}
          className={`text-sm font-medium transition-colors ${
            isActive ? 'text-green-800' : 'text-gray-600 hover:text-green-800'
          }`}
        >
          {children}
        </Link>
      </motion.div>
    );
  };

  return (
    <motion.nav 
      className="bg-white shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center mt-1 sm:mt-0">
              <div className="text-lg sm:text-2xl font-bold text-green-800 leading-none">Longhor</div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 leading-none ml-1">Voyage</div>
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavItem to="/">Accueil</NavItem>
            <NavItem to="/destinations">Destinations</NavItem>
            <NavItem to="/a-propos">À propos</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button 
              className="p-2 text-gray-600 hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-200 rounded-full"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Recherche"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.a
              href="https://wa.me/221776148802"
              className="hidden md:inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver
            </motion.a>
            <motion.button 
              className="md:hidden p-2 text-gray-600 hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-200 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              <NavItem to="/">Accueil</NavItem>
              <NavItem to="/destinations">Destinations</NavItem>
              <NavItem to="/a-propos">À propos</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <motion.a
                href="https://wa.me/221776148802"
                className="block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;