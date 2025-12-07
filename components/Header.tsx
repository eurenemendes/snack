import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-red shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-brand-yellow shadow-md">
             <img src="https://picsum.photos/50/50" alt="Logo" className="w-full h-full object-cover opacity-80" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Potato Chips</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-sm">
          <a href="#" className="hover:text-brand-yellow transition-colors">CREATE YOUR OWN</a>
          <a href="#" className="hover:text-brand-yellow transition-colors group flex items-center gap-1">
            SHOP CHIPS <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-brand-yellow transition-colors group flex items-center gap-1">
            SHOP BY CATEGORY <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-brand-yellow transition-colors group flex items-center gap-1">
            EXPLORE <ChevronDown size={14} />
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <button className="hover:scale-110 transition-transform"><Search className="w-5 h-5" /></button>
          <button className="hover:scale-110 transition-transform"><User className="w-5 h-5" /></button>
          <button className="hover:scale-110 transition-transform relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-brown text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-red absolute top-full left-0 w-full p-6 shadow-xl flex flex-col gap-4 text-white">
          <a href="#" className="py-2 border-b border-red-400">CREATE YOUR OWN</a>
          <a href="#" className="py-2 border-b border-red-400">SHOP CHIPS</a>
          <a href="#" className="py-2 border-b border-red-400">SHOP BY CATEGORY</a>
          <a href="#" className="py-2 border-b border-red-400">EXPLORE</a>
          <div className="flex gap-4 mt-4">
             <Search className="w-6 h-6" />
             <User className="w-6 h-6" />
             <ShoppingBag className="w-6 h-6" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;