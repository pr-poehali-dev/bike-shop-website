
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { 
  Bike, 
  ShoppingCart, 
  ChevronRight, 
  Menu, 
  X,
  Filter, 
  SlidersHorizontal 
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Catalog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const bikes = [
    {
      id: 1,
      name: "Горный велосипед XC-200",
      price: 45000,
      category: "Горные",
      brand: "Trek",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Шоссейный велосипед Road Master",
      price: 68000,
      category: "Шоссейные",
      brand: "Specialized",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Городской велосипед Cruiser",
      price: 32000,
      category: "Городские",
      brand: "Giant",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Горный велосипед Trail Blazer",
      price: 57000,
      category: "Горные",
      brand: "Cannondale",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Шоссейный велосипед Speed Pro",
      price: 82000,
      category: "Шоссейные",
      brand: "Trek",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Городской велосипед Urban Rider",
      price: 29000,
      category: "Городские",
      brand: "Merida",
      image: "/placeholder.svg"
    }
  ];

  const brands = ["Trek", "Specialized", "Giant", "Cannondale", "Merida"];
  const categories = ["Горные", "Шоссейные", "Городские"];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Bike className="h-6 w-6 text-primary" />
            </Link>
            <Link to="/">
              <span className="text-xl font-bold">ВелоМир</span>
            </Link>
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
            <Link to="/catalog" className="text-primary font-medium">Каталог</Link>
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
              <Link to="/catalog" className="text-primary font-medium">Каталог</Link>
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

      {/* Заголовок каталога */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Каталог велосипедов</h1>
          <div className="flex items-center gap-2 text-muted-foreground mt-2">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Каталог</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Фильтры для десктопа */}
          <div className="hidden md:block w-full md:w-64 shrink-0">
            <div className="sticky top-4">
              <h2 className="text-xl font-bold mb-4">Фильтры</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Бренды</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Цена</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="number" 
                      placeholder="От" 
                      className="p-2 text-sm border border-border rounded w-full"
                    />
                    <input 
                      type="number" 
                      placeholder="До" 
                      className="p-2 text-sm border border-border rounded w-full" 
                    />
                  </div>
                </div>

                <Button className="w-full">Применить фильтры</Button>
              </div>
            </div>
          </div>

          {/* Основной контент каталога */}
          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="mb-4 md:mb-0">
                <p className="text-muted-foreground">Найдено {bikes.length} товаров</p>
              </div>
              
              <div className="flex flex-wrap w-full md:w-auto gap-4">
                {/* Кнопка мобильных фильтров */}
                <Button 
                  variant="outline" 
                  className="md:hidden flex-1"
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Фильтры
                </Button>
                
                {/* Сортировка */}
                <div className="flex-1 md:flex-none">
                  <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">Сначала недорогие</SelectItem>
                      <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="new">Сначала новинки</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Мобильные фильтры */}
            {isFiltersOpen && (
              <div className="md:hidden mb-6 p-4 border border-border rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold flex items-center">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Фильтры
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsFiltersOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Категории</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`mobile-category-${category}`} />
                          <label htmlFor={`mobile-category-${category}`} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Бренды</h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox id={`mobile-brand-${brand}`} />
                          <label htmlFor={`mobile-brand-${brand}`} className="text-sm cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Цена</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="number" 
                        placeholder="От" 
                        className="p-2 text-sm border border-border rounded w-full"
                      />
                      <input 
                        type="number" 
                        placeholder="До" 
                        className="p-2 text-sm border border-border rounded w-full" 
                      />
                    </div>
                  </div>

                  <Button className="w-full">Применить фильтры</Button>
                </div>
              </div>
            )}

            {/* Сетка товаров */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bikes.map((bike) => (
                <Card key={bike.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <img 
                    src={bike.image} 
                    alt={bike.name} 
                    className="w-full h-48 object-cover" 
                  />
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">{bike.category} / {bike.brand}</div>
                    <CardTitle className="text-lg mb-2">{bike.name}</CardTitle>
                    <p className="font-bold text-primary">{bike.price.toLocaleString()} ₽</p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-muted py-12 mt-12">
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

export default Catalog;
