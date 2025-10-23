import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-martin.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(-45deg, hsl(0 100% 60%), hsl(164 100% 60%), hsl(220 100% 60%), hsl(280 100% 60%))",
            backgroundSize: "400% 400%",
            animation: "gradient-shift 15s ease infinite"
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Background gradient shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-l-[100px] hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="italic text-foreground/80">Grafický</span>{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ backgroundSize: "200% auto" }}>
                  dizajnér
                </span>
              </h2>
            </motion.div>

            {/* Bullet Points */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                "Moderný a kreatívny prístup",
                "Dizajn pre weby, branding a tlač",
                "Realizácia do 7 dní"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button
                variant="accent"
                size="lg"
                className="text-lg px-8 py-6 h-auto rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
              >
                Získajte cenovú ponuku
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Red gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-[40px]"
                animate={{
                  rotate: [3, 6, 3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main image container */}
              <motion.div 
                className="relative bg-gradient-to-br from-primary/90 to-primary rounded-[40px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroImage}
                  alt="Martin Švec - Grafický dizajnér"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Creative Badge */}
              <motion.div 
                className="absolute bottom-8 right-8 bg-background rounded-2xl shadow-2xl p-6"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
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
                  </motion.div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-medium">
                      Kreatívne
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Riešenia
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
