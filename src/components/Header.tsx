
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Bike, ShoppingCart, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bike className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ВелоМир</span>
        </div>
        
        {/* Мобильное меню */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Сервис</Link>
          <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
          <Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">
            <ShoppingCart className="h-5 w-5" />
            <span>Корзина</span>
          </Button>
        </div>
      </div>
      
      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border py-4">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Сервис</Link>
            <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
            <Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link>
            <Button variant="outline" className="w-full justify-center mt-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Корзина</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
