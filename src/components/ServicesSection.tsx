import {
  Palette,
  Globe,
  FileText,
  Package,
  Image,
  Smartphone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion"; // <-- Import motion

const services = [
  {
    icon: Palette,
    title: "Brandová identita",
    description:
      "Kompletný vizuálny štýl vašej značky. Logo, farebná paleta, typografia a brand guidelines pre konzistentnú komunikáciu.",
  },
  {
    icon: Globe,
    title: "Web dizajn",
    description:
      "Moderné a responzívne dizajny webových stránok. UI/UX dizajn pre maximálny užívateľský zážitok a konverzie.",
  },
  {
    icon: FileText,
    title: "Tlačové materiály",
    description:
      "Vizitky, letáky, brožúry, katalógy a bannery. Profesionálne grafické materiály pripravené na tlač.",
  },
  {
    icon: Package,
    title: "Obalový dizajn",
    description:
      "Atraktívny dizajn obalov produktov. Od konceptu po realizáciu, dizajn ktorý predáva.",
  },
  {
    icon: Image,
    title: "Social media grafika",
    description:
      "Príspevky, príbehy a reklamy pre sociálne siete. Konzistentný vizuálny štýl pre všetky platformy.",
  },
  {
    icon: Smartphone,
    title: "Mobilné aplikácie",
    description:
      "UI/UX dizajn pre mobilné aplikácie. Intuitívne a používateľsky prívetivé rozhrania.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  // Using the same useInView logic as your PortfolioSection
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // Attach the ref to the main section element
    <section ref={ref} id="sluzby" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll Reveal for Heading and Subtitle */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Moje služby
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kreatívne grafické služby pre váš úspešný biznis
          </p>
        </motion.div>

        {/* Scroll Reveal for Service Cards (Staggered Effect) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              // Add a delay based on the index for a nice staggered effect
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
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
            </motion.div>
          ))}
        </div>

        {/* Scroll Reveal for Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: services.length * 0.1 }} // Ensure button appears after cards
        >
          <Button
            variant="accent"
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-full"
          >
            Cenová ponuka ZDARMA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
