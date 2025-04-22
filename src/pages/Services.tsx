
import { ArrowRight, Wrench, Clock, Calendar, BarChart4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const mainServices = [
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Базовое обслуживание",
      description: "Проверка и настройка всех узлов велосипеда, смазка цепи, регулировка тормозов и переключателей",
      price: "от 1 500 ₽",
      time: "1 час"
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: "Полное ТО",
      description: "Полная разборка, чистка, смазка, настройка всех компонентов. Идеально перед сезоном",
      price: "от 4 000 ₽",
      time: "3-4 часа"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Сезонное хранение",
      description: "Безопасное хранение вашего велосипеда в межсезонье с профилактическим обслуживанием",
      price: "от 5 000 ₽",
      time: "Весь сезон"
    }
  ];

  const additionalServices = [
    { name: "Настройка переключателей", price: "от 800 ₽" },
    { name: "Замена камеры/покрышки", price: "от 500 ₽" },
    { name: "Исправление «восьмерки»", price: "от 700 ₽" },
    { name: "Установка аксессуаров", price: "от 300 ₽" },
    { name: "Замена тормозных колодок", price: "от 600 ₽" },
    { name: "Сборка велосипеда из коробки", price: "от 2 000 ₽" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero секция */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Сервисный центр ВелоМир</h1>
              <p className="text-lg mb-8 text-muted-foreground">
                Профессиональное обслуживание и ремонт велосипедов всех типов. 
                Опытные механики и современное оборудование.
              </p>
              <Button size="lg" asChild>
                <a href="#services">
                  Наши услуги
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Основные услуги */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Основные услуги</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mainServices.map((service, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Стоимость</p>
                        <p className="font-medium text-primary">{service.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Время</p>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{service.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Записаться</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Прайс-лист */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Прайс-лист</h2>
            <p className="text-center text-muted-foreground mb-12">
              Все услуги выполняются с использованием профессионального инструмента и расходных материалов
            </p>
            
            <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-sm border p-6">
              {additionalServices.map((service, index) => (
                <div key={index}>
                  <div className="flex justify-between py-3">
                    <span>{service.name}</span>
                    <span className="font-medium">{service.price}</span>
                  </div>
                  {index < additionalServices.length - 1 && <Separator />}
                </div>
              ))}
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Полный прайс-лист доступен в нашем сервисном центре.
                  Для сложных работ возможна индивидуальная оценка стоимости.
                </p>
                <Button>Скачать полный прайс-лист</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Как записаться */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Как записаться на сервис</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Оставьте заявку</h3>
                <p className="text-muted-foreground">Позвоните нам или заполните форму на сайте</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Согласуйте время</h3>
                <p className="text-muted-foreground">Менеджер свяжется с вами для подтверждения времени</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Привезите велосипед</h3>
                <p className="text-muted-foreground">Или закажите доставку в обе стороны</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg">
                Записаться на сервис
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
