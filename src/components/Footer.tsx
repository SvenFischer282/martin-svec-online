import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif italic font-bold mb-4">
              Martin Švec
            </h3>
            <p className="text-background/80 mb-4">
              Grafický dizajnér
            </p>
            <p className="text-background/70 text-sm">
              Moderný dizajn pre weby, branding a tlač
            </p>
          </div>

          {/* Rýchle odkazy */}
          <div>
            <h4 className="font-semibold mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#o-mne" className="text-background/80 hover:text-background transition-colors">
                  O mne
                </a>
              </li>
              <li>
                <a href="#spokojni-klienti" className="text-background/80 hover:text-background transition-colors">
                  Spokojní klienti
                </a>
              </li>
              <li>
                <a href="#sluzby" className="text-background/80 hover:text-background transition-colors">
                  Moje služby
                </a>
              </li>
              <li>
                <a href="#blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Služby */}
          <div>
            <h4 className="font-semibold mb-4">Služby</h4>
            <ul className="space-y-2 text-background/80">
              <li>Brandová identita</li>
              <li>Web dizajn</li>
              <li>Tlačové materiály</li>
              <li>Obalový dizajn</li>
              <li>Social media</li>
              <li>UI/UX dizajn</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-background/80 flex-shrink-0 mt-0.5" />
                <a href="mailto:martin@martinsvec.sk" className="text-background/80 hover:text-background transition-colors">
                  martin@martinsvec.sk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-background/80 flex-shrink-0 mt-0.5" />
                <a href="tel:+421900000000" className="text-background/80 hover:text-background transition-colors">
                  +421 900 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/80 flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Bratislava, Slovensko
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Martin Švec. Všetky práva vyhradené.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Ochrana súkromia
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Obchodné podmienky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
