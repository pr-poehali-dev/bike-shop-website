
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Bike, ShoppingCart, ChevronRight, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const popularBikes = [
    {
      id: 1,
      name: "Горный велосипед XC-200",
      price: 45000,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Шоссейный велосипед Road Master",
      price: 68000,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Городской велосипед Cruiser",
      price: 32000,
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { name: "Горные", icon: "🏔️" },
    { name: "Шоссейные", icon: "🛣️" },
    { name: "Городские", icon: "🏙️" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
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

      {/* Герой секция */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Велосипеды для любых приключений</h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Лучший выбор горных, шоссейных и городских велосипедов. Профессиональный сервис и консультации.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Каталог
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Консультация
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Велосипед" 
              className="max-h-[400px] object-contain rounded-md" 
            />
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Категории велосипедов</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link to="/catalog" key={index}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle>{category.name} велосипеды</CardTitle>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="ghost">
                      Смотреть все
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Популярные модели</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularBikes.map((bike) => (
              <Card key={bike.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={bike.image} 
                  alt={bike.name} 
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="pt-6">
                  <CardTitle className="text-lg mb-2">{bike.name}</CardTitle>
                  <p className="font-bold text-primary">{bike.price.toLocaleString()} ₽</p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    <ShoppingCart className="h-4 w-4" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline">
              Смотреть все модели
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Профессиональный сервис</h3>
              <p className="text-muted-foreground">Опытные механики и современное оборудование для обслуживания вашего велосипеда</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Качественные бренды</h3>
              <p className="text-muted-foreground">Официальный дилер ведущих мировых производителей велосипедов и аксессуаров</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">👨‍👩‍👦</div>
              <h3 className="text-xl font-bold mb-2">Персональный подход</h3>
              <p className="text-muted-foreground">Индивидуальный подбор велосипеда с учетом ваших потребностей и физических данных</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
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
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Горные велосипеды</Link></li>
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Шоссейные велосипеды</Link></li>
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Городские велосипеды</Link></li>
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Аксессуары</Link></li>
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
            <p>© 2023 ВелоМир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
