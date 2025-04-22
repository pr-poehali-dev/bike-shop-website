
import { Link } from 'react-router-dom';
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Велосипеды для любых приключений</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Лучший выбор горных, шоссейных и городских велосипедов. Профессиональный сервис и консультации.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/catalog">
                Каталог
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contacts">
                Консультация
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Велосипед" 
            className="max-h-[400px] object-contain rounded-md animate-fade-in" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
