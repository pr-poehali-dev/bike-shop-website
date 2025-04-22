
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bike, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDropdown } from '@/components/ui/cart/CartDropdown';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/catalog', label: 'Каталог' },
    { path: '/services', label: 'Сервис' },
    { path: '/about', label: 'О нас' },
    { path: '/contacts', label: 'Контакты' },
  ];
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Bike className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ВелоМир</span>
        </Link>
        
        {/* Мобильное меню */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`transition-colors ${
                isActive(link.path) 
                  ? 'text-primary font-medium' 
                  : 'hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <CartDropdown />
        </div>
      </div>
      
      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-colors ${
                  isActive(link.path) 
                    ? 'text-primary font-medium' 
                    : 'hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <CartDropdown />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
