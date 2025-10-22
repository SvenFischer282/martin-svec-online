import { Search, ShoppingCart, BarChart3, Megaphone, LineChart, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Google Search Ads",
    description: "Cielená reklama vo vyhľadávaní Google. Oslovte zákazníkov presne v momente, keď hľadajú vaše produkty alebo služby.",
  },
  {
    icon: ShoppingCart,
    title: "Google Shopping",
    description: "Efektívna propagácia produktov v Google Shopping. Ideálne pre e-shopy, ktoré chcú zvýšiť predaj a viditeľnosť.",
  },
  {
    icon: Megaphone,
    title: "Display reklama",
    description: "Vizuálna reklama na milióny webových stránok. Budujte povedomie o značke a oslovujte nových zákazníkov.",
  },
  {
    icon: LineChart,
    title: "YouTube reklama",
    description: "Video kampane na YouTube s presným cielením. Zaujmite publikum a zvýšte záujem o vašu firmu.",
  },
  {
    icon: BarChart3,
    title: "Analytika a reporting",
    description: "Detailné sledovanie výkonnosti kampaní. Vždy viete, ako fungujú vaše investície do reklamy.",
  },
  {
    icon: Settings,
    title: "Optimalizácia kampaní",
    description: "Pravidelné vylepšovanie a úpravy pre maximálny výkon. Neustále zlepšujem výsledky vašich kampaní.",
  },
];

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Moje služby
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komplexné riešenia Google reklamy šité na míru vašim potrebám
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="accent" 
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-full"
          >
            Nezáväzná konzultácia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
