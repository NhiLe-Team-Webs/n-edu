import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import challengeImage from "@/assets/challenge-hero.jpg";

const Challenge = () => {
  const benefits = [
    {
      title: "Rèn luyện tính kỷ luật",
      description: "Bứt phá cùng Nhi Lê và kỷ luật liên tục.",
    },
    {
      title: "Tính tự giác và chủ động",
      description: "Tạo thói quen hành động NGAY LẬP TỨC.",
    },
    {
      title: "Nhiệt huyết",
      description: "Được tiếp 'lửa' mỗi ngày cùng Nhi Lê.",
    },
    {
      title: "Cộng đồng",
      description: "Kết nối với những người cùng chí hướng.",
    },
  ];

  const pastChallenges = [
    "Tháng 1: Bắt đầu hành động",
    "Tháng 2: Duy trì thói quen tốt",
    "Tháng 3: Phát triển kỹ năng mới",
    "Tháng 4: Xây dựng mối quan hệ",
    "Tháng 5: Tài chính cá nhân",
    "Tháng 6: Sức khỏe & Thể chất",
    "Tháng 7: Phát triển sự nghiệp",
    "Tháng 8: Học tập hiệu quả",
    "Tháng 9: Quản lý thời gian",
    "Tháng 10: Tư duy sáng tạo",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              THỬ THÁCH 30 NGÀY
            </h1>
            <div className="mb-4">
              <p className="text-xl text-foreground mb-2">
                Chủ đề Tháng 11: <strong>Sáng tạo nội dung</strong>
              </p>
              <p className="text-lg text-muted-foreground">
                Giá hạn mỗi tháng: <span className="text-3xl font-bold text-green-600">396.000</span> <span className="text-xl">VNĐ</span>
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              ĐĂNG KÝ NGAY
            </Button>
          </div>

          {/* Challenge Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={challengeImage}
                alt="Thử thách 30 ngày"
                className="w-full"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="p-8 bg-secondary/30">
              <p className="text-lg text-foreground leading-relaxed">
                Nhi đây, có ai học kiến thức của Nhi xong bỏ vô góc trì hoãn không làm không? 
                Nhi quyết định tạo ra <strong>Thử Thách 30 Ngày</strong> để đồng hành cùng các bạn 
                bắt đầu tạo thói quen tốt.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Năm 2025, Nhi muốn gần hơn với khán giả của Nhi, cùng các bạn, các em tạo ra 
                nhiều thứ tốt đẹp hơn cho cuộc sống!
              </p>
            </Card>
          </div>

          {/* What is 30 Day Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Thử thách 30 ngày là gì?
            </h2>
            <Card className="max-w-3xl mx-auto p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Đây là hành trình <strong>30 ngày hành động liên tục</strong> dưới sự quan sát 
                và thúc đẩy của Nhi Lê. Mỗi ngày, bạn nhận nhiệm vụ và cần hoàn thành, báo cáo 
                kết quả trước <strong>11h đêm</strong> trong nhóm học.
              </p>
            </Card>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Bạn nhận được gì sau 30 ngày
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Các chủ đề đã triển khai
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {pastChallenges.map((challenge, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <p className="text-foreground font-medium">{challenge}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-xl"
            >
              THAM GIA NGAY
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Challenge;
