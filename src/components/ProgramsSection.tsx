import ProgramCard from "./ProgramCard";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Find your x-factor preview",
      tags: ["#marketing"],
      description:
        "Kiến thức thực tế và cơ bản về marketing cho doanh nghiệp. Làm sao để khách hàng nhìn thấy sản phẩm và quyết định mua sản phẩm của bạn một cách tự nhiên.",
    },
    {
      title: "Sức mạnh vô hạn",
      tags: ["#doanh nhân", "#doanh nghiệp"],
      description:
        "Chương trình học 6 tháng liên tục cùng những Bậc thầy quốc tế, đặt nền móng vững chãi cho sự bắt đầu của những doanh nhân thực thụ.",
    },
    {
      title: "Là chính mình",
      tags: ["#phát triển bản thân", "#là chính mình"],
      description:
        "Ba ngày học trực tiếp với những Người dẫn đường Quốc tế, nơi nhìn rõ cảm xúc của chính bạn và khai mở những khúc mắc - thứ cản bước bạn sống một cuộc đời đáng sống.",
    },
    {
      title: "FINd your x-factor",
      tags: ["#marketing", "#tài chính"],
      description:
        "Khóa học chuyên sâu về marketing và tài chính, giúp bạn tìm ra yếu tố đặc biệt để phát triển doanh nghiệp của mình.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
