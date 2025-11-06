import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi", href: "https://www.nhi.sg/", external: true },
    { label: "Khóa học", href: "/programs" },
    { label: "Thử thách 30n", href: "/challenge" },
    { label: "Liên hệ", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">N</span>
              <span className="text-foreground">Edu</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
              onClick={() => window.location.href = '/programs'}
            >
              Đăng ký ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '/programs';
                }}
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
