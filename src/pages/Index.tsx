import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import MissionSection from "@/components/MissionSection";
import ProfileSection from "@/components/ProfileSection";
import ProgramsSection from "@/components/ProgramsSection";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <MissionSection />
      <ProfileSection />
      <ProgramsSection />
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
