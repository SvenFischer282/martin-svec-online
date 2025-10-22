import { Award, Target, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Spokojných klientov",
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Priemerný nárast ROI",
  },
  {
    icon: Target,
    number: "500+",
    label: "Úspešných kampaní",
  },
  {
    icon: Award,
    number: "5+",
    label: "Rokov skúseností",
  },
];

const AboutSection = () => {
  return (
    <section id="o-mne" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            O mne
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Som <span className="text-foreground font-semibold">Martin Švec</span>, certifikovaný špecialista na Google reklamu 
            s viac ako 5-ročnými skúsenosťami. Pomáham firmám na Slovensku dosiahnuť maximálny návrat z investícií 
            do online reklamy. Každý projekt beriem osobne a vždy hľadám najefektívnejšie riešenia pre vašu firmu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
