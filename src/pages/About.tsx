
import { ChevronRight, Award, Users, Clock, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  const stats = [
    { icon: <Clock className="h-10 w-10 text-primary" />, value: "10+", label: "лет на рынке" },
    { icon: <Users className="h-10 w-10 text-primary" />, value: "5000+", label: "довольных клиентов" },
    { icon: <Award className="h-10 w-10 text-primary" />, value: "300+", label: "моделей велосипедов" },
    { icon: <Map className="h-10 w-10 text-primary" />, value: "3", label: "магазина в городе" }
  ];

  const team = [
    { name: "Алексей Петров", position: "Основатель и руководитель", image: "/placeholder.svg" },
    { name: "Марина Соколова", position: "Главный консультант", image: "/placeholder.svg" },
    { name: "Дмитрий Иванов", position: "Старший механик", image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero секция */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании ВелоМир</h1>
              <p className="text-lg mb-8 text-muted-foreground">
                Мы являемся ведущим веломагазином в городе с более чем 10-летним опытом работы.
                Наша миссия — сделать велоспорт доступным и приятным для каждого.
              </p>
            </div>
          </div>
        </section>

        {/* История компании */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наша история</h2>
                <p className="mb-4 text-muted-foreground">
                  Компания ВелоМир была основана в 2013 году группой энтузиастов велоспорта. 
                  Мы начинали с небольшого магазина в центре города и нескольких моделей велосипедов.
                </p>
                <p className="mb-4 text-muted-foreground">
                  За десять лет работы мы выросли до сети из трех магазинов, 
                  стали официальными дилерами ведущих мировых производителей и 
                  создали профессиональный сервисный центр.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Сегодня ВелоМир — это не просто магазин, а настоящее сообщество 
                  любителей активного образа жизни и велоспорта.
                </p>
                <Button variant="outline" asChild>
                  <a href="#team">
                    Познакомьтесь с нашей командой
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="История компании" 
                  className="rounded-lg max-h-[400px]" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Команда */}
        <section id="team" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative overflow-hidden rounded-full w-48 h-48 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg max-w-2xl mx-auto mb-8">
                Наша команда состоит из профессионалов, увлеченных велоспортом. 
                Мы всегда готовы поделиться своими знаниями и опытом, 
                чтобы помочь вам выбрать идеальный велосипед.
              </p>
              <Button>Присоединиться к команде</Button>
            </div>
          </div>
        </section>

        {/* Ценности */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Качество</h3>
                <p className="text-muted-foreground">
                  Мы предлагаем только проверенные и качественные товары от надежных производителей.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Экспертиза</h3>
                <p className="text-muted-foreground">
                  Наши сотрудники – настоящие эксперты в велоиндустрии, постоянно повышающие квалификацию.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Сообщество</h3>
                <p className="text-muted-foreground">
                  Мы создаем и поддерживаем сообщество велосипедистов через организацию мероприятий и совместных покатушек.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
