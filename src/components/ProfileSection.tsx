import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const ProfileSection = () => {
  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl flex-shrink-0">
              <img
                src={profileImage}
                alt="Nhi Le"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-foreground mb-2">Nhi Le</h3>
              <p className="text-lg text-muted-foreground mb-4">Doanh nhân</p>
              <div className="flex gap-4 justify-center md:justify-start mb-4">
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
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                xem thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
