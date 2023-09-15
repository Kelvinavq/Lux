import Sidebar from "../../components/user/Sidebar";
import { BannerTravel } from "../../components/user/BannerTravel";

export const Travel = () => {
  return (
    <>
      <Sidebar />
      <div className="container-sidebar">
        <BannerTravel />
      </div>
    </>
  );
};
