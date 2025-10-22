import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default Index;
