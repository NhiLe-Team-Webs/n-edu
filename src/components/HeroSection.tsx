const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HJ1x2IRMoqM"
              title="LCM Bạn Thực Sự Là Ai?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-center mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Người Việt, làm hàng Việt, cho người Việt
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
