import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Webnut s.r.o.",
    date: "12/02/2025",
    text: "My ako firma môžeme pána Šveca len odporúčať. Nielen že nám pomohol so správnym nastavením google kampaní, ale vždy ochotne odpovedal na naše otázky, pekne vysvetlil, a doporučil ďalšiu spoluprácu. Ďakujeme :-)",
    avatar: "W",
  },
  {
    name: "Jarmila Gajdošová",
    date: "11/02/2025",
    text: "Veľká spokojnosť, okamžitá reakcia, rady akéhokoľvek druhu, zvýšili sme obrat. Odporúčame.",
    company: "BEROXY.SK",
    avatar: "J",
  },
  {
    name: "Peter Novák",
    date: "10/02/2025",
    text: "Profesionálny prístup a výborné výsledky. Kampaň priniesla presne to, čo sme očakávali. Určite budeme pokračovať v spolupráci.",
    avatar: "P",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Spokojní klienti
          </h2>
          <p className="text-lg text-muted-foreground">
            Pozrite si, čo hovoria moji klienti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  {testimonial.company && (
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                  )}
                </div>
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
