import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, MapPin, User, Clock, CheckCircle2 } from "lucide-react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";
import curriculumImage from "@/assets/curriculum.jpg";

const CourseDetail = () => {
  // In a real app, you'd fetch course data based on the ID from useParams()
  const { id } = useParams();

  const courseInfo = [
    { icon: Calendar, label: "Chủ đề", value: "Phát triển bản thân" },
    { icon: Clock, label: "Thời gian học", value: "18 - 21/03/2026" },
    { icon: User, label: "Người dẫn đường", value: "NhiLe x Guest Instructors" },
    { icon: Clock, label: "Số buổi học", value: "3,5 ngày" },
    { icon: MapPin, label: "Địa điểm học", value: "Khách sạn Mikazuki Đà Nẵng" },
    { icon: Users, label: "Số lượng học viên", value: "64 học viên" },
  ];

  const testimonials = [
    {
      title: "[LCM] Khoá học \"Là Chính Mình\" có gì?",
      videoId: "PFWDwSf5EGc",
      channel: "Ms Nhi Podcast",
    },
    {
      title: "Tìm lại chính mình - Bắt đầu từ đâu?",
      videoId: "RAaXaJxFXpE",
      channel: "Trang PB",
    },
    {
      title: "[LCM] Tìm Ra Nghành Nghề Phù Hợp Bạn",
      videoId: "8qq6WDQFFQk",
      channel: "Ms Nhi Podcast",
    },
  ];

  const privileges = [
    {
      title: "Tham gia cộng đồng N-Edu",
      description:
        "Chúng tôi có sẵn một cộng đồng tích cực và đầy tiềm năng, nơi có những người cùng chí hướng sẵn lòng đồng hành và hỗ trợ lẫn nhau trong sự nghiệp và cuộc sống.",
    },
    {
      title: "Học lại trọn đời",
      description:
        "Sau khi học viên tốt nghiệp, bạn được quyền quay lại học khi có lớp và hoàn toàn miễn phí. Các chương trình của N-Edu luôn được cập nhật và nâng cấp theo những chuyển biến của thế giới.",
    },
    {
      title: "Hỗ trợ sau khi học",
      description:
        "Sau khi hoàn thành khóa học, học viên vẫn được hỗ trợ bởi đội ngũ giảng và chuyên gia để giải đáp thắc mắc hoặc giúp giải quyết các vấn đề thực tế.",
    },
    {
      title: "Hợp tác quốc tế",
      description:
        "Mỗi năm chúng tôi có nhiều sự kiện và chương trình học trực tiếp, mở ra cơ hội gặp gỡ chuyên gia và học viên quốc tế.",
    },
    {
      title: "Cá nhân hóa lộ trình",
      description:
        "Lựa chọn khóa học phù hợp với nhu cầu cá nhân đưa bạn nhanh đến điều bạn ước muốn.",
    },
    {
      title: "Đội ngũ hỗ trợ liên tục",
      description:
        "Đội ngũ hỗ trợ của N-Edu luôn sẵn sàng giải đáp thắc mắc của bạn và đảm bảo những quyền lợi của bạn.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Hero Banner */}
        <div className="relative w-full h-[400px] bg-gradient-to-r from-[#E5D4C1] to-[#D4C4B1]">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center">
              <img
                src="/images/lachinhminh.jpg"
                alt="Là Chính Mình"
                className="mx-auto w-full max-w-4xl rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Course Header */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-foreground mb-4">
              THỜI GIAN: THÁNG 03 NĂM 2026
            </p>
            <div className="flex justify-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Phát triển bản thân
              </span>
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Là chính mình
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Là Chính Mình 03
            </h1>
            <div className="mb-6">
              <p className="text-lg text-foreground mb-2">
                Chi phí: <span className="text-3xl font-bold text-green-600">59.696.000</span>{" "}
                <span className="text-xl">VNĐ</span>
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg"
            >
              ĐĂNG KÝ NGAY
            </Button>
          </div>

          {/* Course Information */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
              THÔNG TIN KHÓA HỌC
            </h2>
            <Card className="max-w-3xl mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <info.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{info.label}:</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10"
                >
                  ĐĂNG KÝ NGAY
                </Button>
              </div>
            </Card>
          </div>

          {/* Mission */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-2">
              MISSION
            </p>
            <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Sứ mệnh</h2>
            <Card className="p-8 bg-secondary/30">
              <p className="text-lg text-foreground text-center leading-relaxed">
                Khóa học "Là Chính Mình" mang sứ mệnh giúp bạn khám phá và chữa lành mọi khía
                cạnh của bản thân, xây dựng lối sống cân bằng và phát triển toàn diện về tinh
                thần, cảm xúc, và thể chất.
              </p>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Lời chứng thực
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                      title={testimonial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {testimonial.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{testimonial.channel}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Lộ trình học</h2>
            <div className="max-w-4xl mx-auto">
              <img
                src={curriculumImage}
                alt="Lộ trình học"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Instructor */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-2">
              Instructor
            </p>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Người dẫn đường
            </h2>
            <Card className="max-w-4xl mx-auto p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={instructorImage}
                    alt="Nhi Le"
                    className="w-48 h-48 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">NhiLe</h3>
                    <p className="text-lg text-muted-foreground mb-4">Doanh nhân</p>
                    <div className="flex gap-3 mb-4">
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
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">
                        15 năm kinh nghiệm trên thương trường tại Singapore và Việt Nam
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        Là một Doanh nhân | Nhà Tâm lý học | Người lãnh đạo cộng đồng
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>
                          Thay đổi và tạo cảm hứng cho hơn 2000 người Việt ở khắp nơi trên thế giới.
                        </li>
                        <li>
                          Làm việc và là nhà lãnh đạo trong nhiều lĩnh vực tại cả Việt Nam và Singapore.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Niềm đam mê với Giáo dục</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                        <li>
                          Hơn 6 năm truyền cảm hứng và giúp nhiều người làm chủ cuộc đời qua các chương
                          trình đào tạo
                        </li>
                        <li>Professional Certificate in Business Coaching (SMU)</li>
                        <li>Resilient Leadership and Business Sustainability Series (SMU)</li>
                        <li>Certification in Artificial Intelligence (AI) in Marketing (SMU)</li>
                        <li>Diploma in Psychology – Kaplan Singapore</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Privileges */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-2">
              Privilege
            </p>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Đặc quyền</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privileges.map((privilege, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-foreground">{privilege.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{privilege.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-xl"
            >
              ĐĂNG KÝ NGAY
            </Button>
          </div>

          {/* Organization */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Đơn vị tổ chức và vận hành
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-3xl font-bold">
                <span className="text-primary">N</span>
                <span className="text-foreground">Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
