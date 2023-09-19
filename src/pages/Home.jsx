import { NavBar } from "../components/home/NavBar";
import { Header } from "../components/home/Header";
import { CoursesSlider } from "../components/home/CoursesSlider";
import { CourseDetail } from "../components/home/CourseDetail";
import { Memberships } from "../components/home/Memberships";
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
        {/* <Preloader /> */}

        <NavBar />

        <Header />

        <CoursesSlider />

        <CourseDetail />
        <Memberships />
        <Footer />
      </div>
    </main>
  );
};
