import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProgramCardProps {
  title: string;
  tags: string[];
  description: string;
}

const ProgramCard = ({ title, tags, description }: ProgramCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
        Đăng ký ngay
      </Button>
    </Card>
  );
};

export default ProgramCard;
