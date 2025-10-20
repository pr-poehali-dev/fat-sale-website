import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Премиум жир Полина",
      volume: "200 мл",
      price: "850 ₽",
      image: "https://cdn.poehali.dev/projects/4b19f36d-3f6e-428c-9522-fe3db4f21ce8/files/515e4c09-bf1d-4e44-917f-25e779e35161.jpg",
      badge: "Бестселлер"
    },
    {
      id: 2,
      name: "Жир Классический",
      volume: "300 мл",
      price: "650 ₽",
      image: "https://cdn.poehali.dev/projects/4b19f36d-3f6e-428c-9522-fe3db4f21ce8/files/cd74fa5c-3728-408c-8a32-76520df58a51.jpg",
      badge: "Новинка"
    },
    {
      id: 3,
      name: "Гусиный жир для жарки",
      volume: "250 мл",
      price: "920 ₽",
      image: "https://cdn.poehali.dev/projects/4b19f36d-3f6e-428c-9522-fe3db4f21ce8/files/515e4c09-bf1d-4e44-917f-25e779e35161.jpg",
      badge: null
    }
  ];

  const certificates = [
    { icon: "ShieldCheck", title: "Сертификат соответствия ГОСТ", subtitle: "№ РФ-2024-001234" },
    { icon: "Award", title: "Декларация о соответствии ТР ТС", subtitle: "ТС N RU Д-RU.АЯ47.В.12345" },
    { icon: "CheckCircle2", title: "Заключение санитарно-эпидемиологическое", subtitle: "№ 77.99.88.000.Т.000123.12.24" },
    { icon: "FileCheck", title: "ISO 22000:2018", subtitle: "Система менеджмента безопасности" }
  ];

  const features = [
    { icon: "Leaf", title: "100% натуральный состав", description: "Без добавок и консервантов" },
    { icon: "Thermometer", title: "Высокая температура дымления", description: "Идеален для жарки и запекания" },
    { icon: "Heart", title: "Полезные жирные кислоты", description: "Омега-3 и витамины A, D, E" },
    { icon: "Timer", title: "Длительный срок хранения", description: "До 12 месяцев в закрытой таре" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        Директор предприятия: Борисова Полина Александровна
      </div>
      <header className="fixed top-10 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-primary">ПРЕМИУМ ЖИР</h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О продукте</a>
            <a href="#catalog" className="text-foreground hover:text-accent transition-colors">Каталог</a>
            <a href="#certificates" className="text-foreground hover:text-accent transition-colors">Сертификаты</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="tel:+79806912260">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </a>
          </Button>
        </nav>
      </header>

      <section className="pt-36 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Премиальное качество</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-primary">Натуральный жир От Полины</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Производим экологически чистый жир из отборного сырья. Каждая партия проходит многоступенчатый контроль качества и имеет все необходимые сертификаты безопасности.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/4b19f36d-3f6e-428c-9522-fe3db4f21ce8/files/515e4c09-bf1d-4e44-917f-25e779e35161.jpg" 
                alt="Премиум жир"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">О продукте</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наш жир сочетает традиционные методы производства с современными технологиями контроля качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-card">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальный вариант для ваших кулинарных шедевров</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative overflow-hidden aspect-square">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.volume}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Сертификаты качества</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Наша продукция соответствует всем требованиям безопасности и качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-primary-foreground/5 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors">
                <CardContent className="pt-6 pb-6 text-center">
                  <Icon name={cert.icon} size={40} className="mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-1 text-primary-foreground">{cert.title}</h3>
                  <p className="text-sm opacity-80">{cert.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/4b19f36d-3f6e-428c-9522-fe3db4f21ce8/files/8d708456-294c-44f1-a371-0a23c5aaf4a7.jpg" 
              alt="Сертификаты"
              className="w-full h-64 object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать сертификаты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">ПРЕМИУМ ЖИР</h3>
              <p className="text-muted-foreground">Натуральный жир высшего качества для ваших кулинарных шедевров</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <a href="tel:+79806912260" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (980) 691-22-60
                </a>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@premium-fat.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-8 border-t">
            © 2024 Премиум Жир. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;