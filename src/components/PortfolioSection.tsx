import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Moderná káva",
    category: "Brandová identita",
    description: "Kompletný rebrand pre kávarenský reťazec vrátane loga a vizuálnej identity.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "TechStart",
    category: "Web dizajn",
    description: "Responzívny web pre startup v oblasti technológií s dôrazom na UX.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Boutique Fashion",
    category: "E-commerce",
    description: "Elegantný dizajn online obchodu s oblečením a vizuálne konzistentný systém.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    title: "FitLife",
    category: "Mobilná aplikácia",
    description: "UI/UX dizajn fitness aplikácie s intuitívnym ovládaním a motivujúcim rozhraním.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Organic Farm",
    category: "Obalový dizajn",
    description: "Prírodný a ekologický dizajn obalov pre biopotraviny.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    color: "from-lime-500/20 to-green-500/20"
  },
  {
    title: "Digital Agency",
    category: "Korporátna identita",
    description: "Profesionálna vizuálna identita pre digitálnu agentúru vrátane tlačových materiálov.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop",
    color: "from-violet-500/20 to-purple-500/20"
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Moje projekty
          </h2>
          <p className="text-lg text-muted-foreground">
            Pozrite si výber mojich najnovších prác
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-background/90 text-foreground backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioSection;
