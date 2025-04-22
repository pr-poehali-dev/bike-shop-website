
import { Link } from 'react-router-dom';
import { Bike } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bike className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ВелоМир</span>
            </div>
            <p className="text-muted-foreground">Лучший магазин велосипедов и аксессуаров в вашем городе</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog?category=mountain" className="text-muted-foreground hover:text-primary transition-colors">Горные велосипеды</Link></li>
              <li><Link to="/catalog?category=road" className="text-muted-foreground hover:text-primary transition-colors">Шоссейные велосипеды</Link></li>
              <li><Link to="/catalog?category=city" className="text-muted-foreground hover:text-primary transition-colors">Городские велосипеды</Link></li>
              <li><Link to="/catalog?category=accessories" className="text-muted-foreground hover:text-primary transition-colors">Аксессуары</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О магазине</Link></li>
              <li><Link to="/delivery" className="text-muted-foreground hover:text-primary transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/warranty" className="text-muted-foreground hover:text-primary transition-colors">Гарантия и возврат</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">ул. Велосипедная, 42</p>
              <p className="mb-2">Тел: +7 (123) 456-78-90</p>
              <p className="mb-2">Email: info@velomir.ru</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ВелоМир. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
