import { Quote } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Sứ mệnh
          </h2>
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 text-primary w-12 h-12 opacity-20" />
            <p className="text-xl md:text-2xl text-foreground leading-relaxed relative z-10">
              Mang kiến thức, giáo dục chất lượng trên toàn thế giới về Việt Nam 
              và hòa hợp với văn hóa người Việt
            </p>
            <Quote className="absolute -bottom-4 -right-4 text-primary w-12 h-12 opacity-20 rotate-180" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
