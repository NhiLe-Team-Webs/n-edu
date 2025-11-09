import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { courses, currencyFormatter, type Course } from "@/lib/mockCourses";
import { toast } from "sonner";

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal, addItem } = useCart();
  const hasItems = items.length > 0;

  const recommended = courses
    .filter((course) => !items.find((item) => item.id === course.id))
    .slice(0, 4);

  const handleAddRecommendation = (course: Course) => {
    addItem(course);
    toast.success("Đã thêm khóa học", {
      description: course.title,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showCartIcon />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 space-y-10">
          <div className="flex flex-col gap-2">
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
              Checkout
            </p>
            <h1 className="text-4xl font-bold text-foreground">Giỏ hàng của bạn</h1>
            <p className="text-muted-foreground max-w-2xl">
              Kiểm tra lại các khóa học chờ thanh toán. Bạn có thể tăng/giảm số lượng và tiếp tục
              khám phá khóa học khác ở bên dưới.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <Card className="p-6 space-y-6">
              {hasItems ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 border border-border/70 rounded-xl p-4"
                  >
                    <div className="w-full md:w-40 h-28 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Khóa học chờ thanh toán
                          </p>
                          <h3 className="text-lg font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-primary font-semibold">
                          {currencyFormatter.format(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-4 justify-between">
                        <div className="flex items-center border rounded-full">
                          <button
                            className="px-3 py-1 text-lg"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            className="px-3 py-1 text-lg"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-muted-foreground flex items-center gap-2"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                          Xóa
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold mb-2">Giỏ hàng đang trống</p>
                  <p className="text-muted-foreground mb-6">
                    Thêm các khóa học từ trang chương trình để bắt đầu.
                  </p>
                  <Button onClick={() => (window.location.href = "/programs")}>
                    Khám phá khóa học
                  </Button>
                </div>
              )}
            </Card>

            <Card className="p-6 space-y-4 h-fit">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span className="text-2xl font-bold text-foreground">
                  {currencyFormatter.format(subtotal)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Giá đã bao gồm tài liệu học tập và quyền truy cập nội dung cập nhật.
              </p>
              <Button
                className="w-full bg-primary text-white font-semibold"
                disabled={!hasItems}
                onClick={() => (window.location.href = "/checkout")}
              >
                Thanh toán
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => (window.location.href = "/programs")}
              >
                Thêm khóa học khác
              </Button>
            </Card>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Khóa học khác</h2>
              <Button variant="link" onClick={() => (window.location.href = "/programs")}>
                Xem tất cả
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {recommended.map((course) => (
                <Card key={course.id} className="p-4 flex flex-col gap-3">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{course.mode}</p>
                    <h3 className="font-semibold text-foreground text-sm">
                      {course.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-primary font-bold">
                      {currencyFormatter.format(course.price)}
                    </p>
                    {course.originalPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                        {currencyFormatter.format(course.originalPrice)}
                      </p>
                    )}
                  </div>
                  <Button variant="outline" onClick={() => handleAddRecommendation(course)}>
                    Thêm vào giỏ hàng
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
