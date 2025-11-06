import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import courseImage1 from "@/assets/course-1.jpg";
import courseImage2 from "@/assets/course-2.jpg";
import courseImage3 from "@/assets/course-3.jpg";

const CoursesSection = () => {
  const courses = [
    {
      title: "Là chính mình",
      date: "10-13/09/2025",
      status: "Sắp diễn ra",
      image: courseImage1,
      link: "#",
    },
    {
      title: "Cuộc sống của bạn",
      date: "20, 21, 23 tháng 08 năm 2025",
      status: "Sắp diễn ra",
      image: courseImage2,
      link: "#",
    },
    {
      title: "Thương hiệu của bạn",
      date: "14-17 tháng 8 năm 2025",
      status: "Sắp diễn ra",
      image: courseImage3,
      link: "#",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            onClick={() => window.location.href = '/programs'}
          >
            Khám phá thêm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
