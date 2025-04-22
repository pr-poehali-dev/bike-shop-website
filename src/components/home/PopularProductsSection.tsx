
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from '@/lib/cart-context';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const PopularProductsSection = () => {
  const { addToCart, isInCart } = useCart();
  
  const popularBikes: Product[] = [
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

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Популярные модели</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularBikes.map((bike) => (
            <Card key={bike.id} className="overflow-hidden hover:shadow-md transition-shadow group">
              <div className="overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="pt-6">
                <CardTitle className="text-lg mb-2">
                  <Link to={`/catalog/${bike.id}`} className="hover:text-primary transition-colors">
                    {bike.name}
                  </Link>
                </CardTitle>
                <p className="font-bold text-primary">{bike.price.toLocaleString()} ₽</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={isInCart(bike.id) ? "secondary" : "default"} 
                  className="w-full"
                  onClick={() => addToCart(bike)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isInCart(bike.id) ? 'В корзине' : 'В корзину'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/catalog">
              Смотреть все модели
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
