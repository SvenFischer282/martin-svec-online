import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 trendov v grafickom dizajne na rok 2025",
    excerpt: "Objavte najnovšie trendy, ktoré formujú svet vizuálnej komunikácie. Od minimalizmu po odvážne farby.",
    date: "15. marec 2025",
    category: "Trendy",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
  {
    title: "Ako vytvoriť silnú brandovú identitu",
    excerpt: "Krok za krokom sprievodca tvorbou konzistentnej vizuálnej identity, ktorá rezonuje s vašou cieľovou skupinou.",
    date: "10. marec 2025",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  },
  {
    title: "Psychológia farieb v dizajne",
    excerpt: "Ako využiť silu farieb pre efektívnu komunikáciu. Význam a vplyv jednotlivých odtieňov na vnímanie značky.",
    date: "5. marec 2025",
    category: "Dizajn",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=400&fit=crop",
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
            Užitočné články a tipy o grafickom dizajne
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
