import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-serif italic font-bold text-foreground">
              Martin Švec
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#o-mne" className="text-foreground hover:text-primary transition-colors font-medium">
              O mne
            </a>
            <a href="#spokojni-klienti" className="text-foreground hover:text-primary transition-colors font-medium">
              Spokojní klienti 👍
            </a>
            <a href="#sluzby" className="text-foreground hover:text-primary transition-colors font-medium">
              Moje služby
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Phone className="h-4 w-4" />
            Zavolať
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
