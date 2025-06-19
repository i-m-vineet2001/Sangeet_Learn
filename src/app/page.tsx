import FeaturedCoursesSection from "@/sections/FeaturedCoursesSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import InstructorsSection from "@/sections/InstructorsSection";
import Instructors from "@/sections/InstructorsSection";
import TestimonialCardSection from "@/sections/TestimonialCardSection";
import UpComingWebinarSection from "@/sections/UpComingWebinarSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCoursesSection/>
    <WhyChooseUsSection/>
    <TestimonialCardSection/>
    <UpComingWebinarSection/>
    <InstructorsSection/>
    <Footer/>

    </main>

  );
}
