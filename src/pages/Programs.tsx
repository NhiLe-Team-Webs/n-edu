import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

  const filters = ["Tất cả", "Offline", "Online", "Doanh nghiệp"];

  const programs = [
    {
      image: "/images/sucmanhvohan.jpg",
      categories: ["Doanh nhân", "Doanh nghiệp"],
      title: "Sức Mạnh Vô Hạn 2",
      sessions: "6 tháng online và 4,5 ngày offline",
      instructor: "NhiLe x Melvin",
      type: "Offline",
    },
    {
      image: "/images/lachinhminh.jpg",
      categories: ["Phát triển bản thân", "Là chính mình"],
      title: "Là Chính Mình 3",
      sessions: "3,5 ngày",
      instructor: "NhiLe x Guest Instructors",
      type: "Offline",
    },
    {
      image: "/images/genai.jpg",
      categories: ["AI", "Phát triển kỹ năng số"],
      title: "Gen AI 101",
      sessions: "2 buổi",
      instructor: "Linda Hui",
      type: "Online",
    },
    {
      image: "/images/thuonghieu.jpg",
      categories: ["Thương hiệu", "Doanh nghiệp"],
      title: "Thương Hiệu Của Bạn",
      sessions: "4 ngày",
      instructor: "NhiLe",
      type: "Online",
    },
    {
      image: "/images/cuocsong.jpg",
      categories: ["Phát triển bản thân", "Cảm xúc"],
      title: "Cuộc Sống Của Bạn",
      sessions: "3 ngày",
      instructor: "NhiLe",
      type: "Online",
    },
    {
      image: "/images/aibusiness.jpg",
      categories: ["AI", "Phát triển kỹ năng số"],
      title: "AI For Business Communication",
      sessions: "3 buổi",
      instructor: "Linda Hui",
      type: "Online",
    },
  ];

  const filteredPrograms =
    activeFilter === "Tất cả"
      ? programs
      : programs.filter((program) => program.type === activeFilter || (activeFilter === "Doanh nghiệp" && program.categories.includes("Doanh nghiệp")));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
            CÁC KHÓA HỌC CHẤT LƯỢNG
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-2 border-border hover:border-primary"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {program.categories.map((category, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{program.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Số buổi học: <strong>{program.sessions}</strong></span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Người dẫn đường: <strong>{program.instructor}</strong></span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Xem chi tiết
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Programs;
