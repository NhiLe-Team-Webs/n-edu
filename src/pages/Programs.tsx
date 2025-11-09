import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Clock, MonitorPlay } from "lucide-react";
import { courses, currencyFormatter, type Course } from "@/lib/mockCourses";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const filters = ["Tat ca", "Online", "Offline", "Hybrid", "AI", "Marketing", "Strategy"];

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState("Tat ca");
  const { addItem } = useCart();

  const filteredCourses = useMemo(() => {
    if (activeFilter === "Tat ca") return courses;
    return courses.filter(
      (course) =>
        course.mode === activeFilter || course.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const handleAddToCart = (course: Course) => {
    addItem(course);
    toast.success("Da them vao gio hang", {
      description: course.title,
      action: {
        label: "Xem gio hang",
        onClick: () => {
          window.location.href = "/cart";
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showCartIcon />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold tracking-[0.3em] uppercase mb-3">
              Courses
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Khoa hoc tai Skills Bridge
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lua chon khoa hoc phu hop de nang cap ky nang lam viec voi AI, tu dong hoa va
              ra quyet dinh dua tren du lieu. Hien tai cac noi dung dung mock data de demo luong.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {course.badge && (
                    <span className="absolute top-3 left-3 bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {course.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MonitorPlay className="w-4 h-4" />
                      {course.mode}
                    </span>
                    <span>-</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.shortDescription}
                  </p>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold text-primary">
                        {currencyFormatter.format(course.price)}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {currencyFormatter.format(course.originalPrice)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Thanh toan mot lan, truy cap tron doi.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.categories.map((category) => (
                      <span
                        key={`${course.id}-${category}`}
                        className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-muted-foreground"
                      >
                        <BadgeCheck className="w-3 h-3 text-primary" />
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => (window.location.href = `/programs/${course.id}`)}
                    >
                      Xem chi tiet
                    </Button>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                      onClick={() => handleAddToCart(course)}
                    >
                      Them vao gio hang
                    </Button>
                  </div>
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
