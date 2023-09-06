import { Header } from "../components/home/Header";
import { About } from "../components/home/About";
import PopularCourses from "../components/home/PopularCourses";
import Testimonial from "../components/home/Testimonial";
import FeaturedCourses from "../components/home/FeaturedCourses";
import { Memberships } from "../components/home/memberships";
import { Footer } from "../components/home/Footer";
import { Preloader } from "../components/home/Preloader";

/**
 * The Home component represents the main landing page of the website.
 * It combines various sections and components to create the homepage layout.
 */
export const Home = () => {
  return (
    <main>
      <div className="container">
        {/* Preloader component for displaying loading animation */}
        <Preloader />

        {/* Header component for website navigation */}
        <Header />

        {/* About section describing the website */}
        <About />

        {/* PopularCourses section displaying trending courses */}
        <PopularCourses />

        {/* Testimonial section with user testimonials */}
        <Testimonial />

        {/* FeaturedCourses section showcasing featured courses */}
        <FeaturedCourses />

        {/* Memberships section for membership information */}
        <Memberships />

        {/* Footer component for the website footer */}
        <Footer />
      </div>
    </main>
  );
};
