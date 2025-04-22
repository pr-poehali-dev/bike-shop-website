
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contacts = () => {
  const shops = [
    {
      name: "ВелоМир — Центральный",
      address: "ул. Велосипедная, 42",
      phone: "+7 (123) 456-78-90",
      email: "center@velomir.ru",
      hours: "9:00 — 21:00 ежедневно"
    },
    {
      name: "ВелоМир — Западный",
      address: "ул. Спортивная, 15",
      phone: "+7 (123) 456-78-91",
      email: "west@velomir.ru",
      hours: "10:00 — 22:00 ежедневно"
    },
    {
      name: "ВелоМир — Восточный",
      address: "пр. Олимпийский, 78",
      phone: "+7 (123) 456-78-92",
      email: "east@velomir.ru",
      hours: "9:00 — 20:00 ежедневно"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero секция */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
              <p className="text-lg mb-4 text-muted-foreground">
                Мы всегда рады ответить на ваши вопросы и помочь с выбором велосипеда.
              </p>
            </div>
          </div>
        </section>

        {/* Карта и контакты */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {shops.map((shop, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{shop.name}</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>{shop.address}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <a href={`tel:${shop.phone}`} className="hover:text-primary transition-colors">
                          {shop.phone}
                        </a>
                      </div>
                      
                      <div className="flex gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <a href={`mailto:${shop.email}`} className="hover:text-primary transition-colors">
                          {shop.email}
                        </a>
                      </div>
                      
                      <div className="flex gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>{shop.hours}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-6">
                      Проложить маршрут
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Напишите нам</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Введите ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема обращения</Label>
                      <Input id="subject" placeholder="Укажите тему вашего обращения" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Опишите ваш вопрос или предложение" 
                        rows={5} 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ секция */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Как выбрать размер велосипеда?</h3>
                  <p className="text-muted-foreground">
                    Размер велосипеда зависит от вашего роста и типа велосипеда. 
                    Мы рекомендуем приехать в магазин для консультации и тест-драйва. 
                    Наши специалисты помогут подобрать оптимальный размер рамы.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Есть ли у вас услуга доставки?</h3>
                  <p className="text-muted-foreground">
                    Да, мы осуществляем доставку велосипедов и аксессуаров по всему городу. 
                    Стоимость доставки зависит от адреса и габаритов товара. 
                    Для крупных заказов доставка может быть бесплатной.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Как часто нужно обслуживать велосипед?</h3>
                  <p className="text-muted-foreground">
                    Рекомендуем проводить базовое обслуживание каждые 500-1000 км пробега или 
                    раз в сезон. Регулярное обслуживание продлевает срок службы велосипеда и 
                    обеспечивает безопасность при эксплуатации.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
