import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 tipov pre úspešnú Google Ads kampaň",
    excerpt: "Zistite, ako vytvoriť efektívnu kampaň, ktorá prinesie výsledky. Praktické rady pre začiatočníkov aj pokročilých.",
    date: "15. marec 2025",
    category: "Tipy a triky",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    title: "Ako znížiť náklady na Google reklamu",
    excerpt: "Efektívne stratégie, ktoré vám pomôžu ušetriť až 40% z reklamného rozpočtu bez straty výkonnosti.",
    date: "10. marec 2025",
    category: "Optimalizácia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    title: "Google Shopping: Kompletný sprievodca",
    excerpt: "Všetko, čo potrebujete vedieť o Google Shopping kampaniach pre váš e-shop. Od nastavenia po optimalizáciu.",
    date: "5. marec 2025",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Užitočné články a tipy o Google reklame
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-semibold group/btn"
                >
                  Čítať viac
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
