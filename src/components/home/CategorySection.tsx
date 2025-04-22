
import { Link } from 'react-router-dom';
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  name: string;
  icon: string;
  slug: string;
}

export const CategorySection = () => {
  const categories: Category[] = [
    { name: "Горные", icon: "🏔️", slug: "mountain" },
    { name: "Шоссейные", icon: "🛣️", slug: "road" },
    { name: "Городские", icon: "🏙️", slug: "city" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Категории велосипедов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/catalog?category=${category.slug}`} key={category.slug}>
              <Card className="hover:shadow-md transition-shadow hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle>{category.name} велосипеды</CardTitle>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost">
                    Смотреть все
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
