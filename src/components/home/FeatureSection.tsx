
export const FeatureSection = () => {
  const features = [
    {
      icon: "🛠️",
      title: "Профессиональный сервис",
      description: "Опытные механики и современное оборудование для обслуживания вашего велосипеда"
    },
    {
      icon: "🏆",
      title: "Качественные бренды",
      description: "Официальный дилер ведущих мировых производителей велосипедов и аксессуаров"
    },
    {
      icon: "👨‍👩‍👦",
      title: "Персональный подход",
      description: "Индивидуальный подбор велосипеда с учетом ваших потребностей и физических данных"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:bg-muted/50 p-6 rounded-lg transition-colors">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
