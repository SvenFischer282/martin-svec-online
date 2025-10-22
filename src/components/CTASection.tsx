import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Potrebujete profesionálny dizajn?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95">
            Kontaktujte ma a získajte cenovú ponuku na mieru. 
            Spoločne vytvoríme vizuál, ktorý vašu značku posunie vpred.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="accent" 
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full w-full sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              Napísať email
            </Button>
            <Button 
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Zavolať teraz
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-90">
            Odpoviem do 24 hodín • Žiadne záväzky • Cenová ponuka ZDARMA
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
