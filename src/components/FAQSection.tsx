import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Ako dlho trvá vytvorenie firemnej identity?",
      answer: "Vytvorenie kompletnej firemnej identity zvyčajne trvá 2-4 týždne. Zahŕňa to konzultáciu, dizajn loga, výber farieb a typografie, vytvorenie brand manuálu a všetky potrebné formáty. Presný čas závisí od komplexnosti projektu a rýchlosti spätnej väzby."
    },
    {
      question: "Koľko stojí grafický dizajn?",
      answer: "Ceny sa líšia podľa typu projektu. Logo začína od 500€, kompletná firemná identita od 1200€, letáky od 150€, web dizajn od 800€. Každý projekt oceňujem individuálne po konzultácii, kde sa dozviem viac o vašich potrebách a cieľoch."
    },
    {
      question: "Poskytujete súbory v editovateľnom formáte?",
      answer: "Áno, všetky projekty dodávam vo viacerých formátoch vrátane editovateľných súborov (AI, PSD, alebo iné podľa požiadaviek). Dostanete aj exporty pre tlač (PDF, EPS) a web (PNG, JPG, SVG) v potrebných rozlíšeniach."
    },
    {
      question: "Koľko revízií je zahrnutých v cene?",
      answer: "V základnej cene každého projektu sú zahrnuté 2-3 kolá revízií, čo je zvyčajne dostačujúce na dosiahnutie perfektného výsledku. Ďalšie úpravy je možné doriešiť za primeranú cenu, ktorú vždy dohodneme vopred."
    },
    {
      question: "Dokážete vytvoriť dizajn pre tlač aj web?",
      answer: "Absolútne! Špecializujem sa na oba formáty a rozumiem technickým požiadavkám pre tlač (CMYK, rozlíšenie 300 DPI) aj web (RGB, optimalizácia súborov). Všetky projekty dodávam v správnych formátoch pre každé médium."
    },
    {
      question: "Potrebujem mať presné predstavy pred začatím projektu?",
      answer: "Nie je to nutné! Súčasťou mojej práce je pomôcť vám sformulovať víziu. Začneme konzultáciou, kde sa dozviem o vašom biznise, cieľovej skupine a preferenciách. Na základe toho vytvorím návrhy, ktoré spoločne upravíme podľa vašich potrieb."
    },
    {
      question: "Ako prebieha spolupráca na diaľku?",
      answer: "Väčšina mojich klientov pracuje so mnou online. Komunikujeme cez email, telefón alebo video hovory. Návrhy zdieľam cez online platformy, kde môžete jednoducho komentovať a navrhonať zmeny. Tento proces je rýchly a efektívny."
    },
    {
      question: "Vytvárate aj obsah pre sociálne siete?",
      answer: "Áno, navrhujem grafické šablóny pre sociálne siete, ktoré zodpovedajú vašej firemnej identite. Môžem vytvoriť sadu editovateľných šablón v Canva alebo dodať PSD súbory, ktoré si viete prispôsobiť pre rôzne príspevky."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Často kladené otázky
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odpovede na najčastejšie otázky o mojich službách, cenách a procese spolupráce
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Nenašli ste odpoveď na vašu otázku?
          </p>
          <a 
            href="tel:+421901234567" 
            className="text-primary hover:underline font-semibold"
          >
            Kontaktujte ma priamo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
