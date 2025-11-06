import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">N</span>
              <span className="text-foreground">Edu</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Mang kiến thức, giáo dục chất lượng về Việt Nam
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/nhisg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/nhile.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/nhile.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="https://www.nhi.sg/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                Khóa học
              </a>
            </li>
            <li>
              <a href="/challenge" className="text-muted-foreground hover:text-primary transition-colors">
                Thử thách 30n
              </a>
            </li>
          </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nhi.sg" className="text-muted-foreground hover:text-primary transition-colors">
                  info@nhi.sg
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+65" className="text-muted-foreground hover:text-primary transition-colors">
                  +65 XXXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Singapore
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} NHI Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
