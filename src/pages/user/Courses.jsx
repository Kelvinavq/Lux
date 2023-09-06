import Sidebar from "../../components/user/Sidebar";
import { CourseList } from "../../components/user/CourseList";

/**
 * The Courses component is responsible for displaying the user's courses.
 * It includes a sidebar navigation menu and a list of courses obtained by the user.
 */
export const Courses = () => {
  return (
    <>
      {/* Sidebar component for user navigation */}
      <Sidebar />

      {/* CourseList component for displaying the user's courses */}
      <CourseList />
    </>
  );
};
