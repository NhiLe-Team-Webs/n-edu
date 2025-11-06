import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  date: string;
  status: string;
  image: string;
  link: string;
}

const CourseCard = ({ title, date, status, image, link }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{date}</p>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Đăng ký ngay
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;
