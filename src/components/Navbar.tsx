import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();

  const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`text-sm font-medium transition-colors ${
          isActive ? 'text-green-800' : 'text-gray-600 hover:text-green-800'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/">Accueil</NavItem>
            <NavItem to="/destinations">Destinations</NavItem>
            <NavItem to="/a-propos">À propos</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a
              href="https://wa.me/221776148802"
              className="hidden md:inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Réserver
            </a>
            <button className="md:hidden p-2 text-gray-600 hover:text-green-800 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;