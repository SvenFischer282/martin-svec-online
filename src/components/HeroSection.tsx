import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-martin.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-l-[100px] hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="italic text-foreground/80">Grafický</span>{" "}
                dizajnér
              </h2>
            </div>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">
                  Moderný a kreatívny prístup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">
                  Dizajn pre weby, branding a tlač
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">Realizácia do 7 dní</p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                variant="accent"
                size="lg"
                className="text-lg px-8 py-6 h-auto rounded-full"
              >
                Získajte cenovú ponuku
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Red gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-[40px] transform rotate-3" />

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-primary/90 to-primary rounded-[40px] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Martin Švec - Grafický dizajnér"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Creative Badge */}
              <div className="absolute bottom-8 right-8 bg-background rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-medium">
                      Kreatívne
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Riešenia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
