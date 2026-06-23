import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopCourses from "@/components/TopCourses";
import Categories from "@/components/Categories";
import Registration from "@/components/Registration";
import Instructors from "@/components/Instructors";
import Events from "@/components/Events";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <TopCourses />
      <Categories />
      <Registration />
      <Instructors />
      <Events />
      <Stats />
      <Testimonials />
      <LatestNews />
      <Newsletter />
      <Footer />
    </>
  );
}
