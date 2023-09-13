import { CardsRequest } from "../../components/user/CardsRequest";
import { FormRequest } from "../../components/user/FormRequest";
import Sidebar from "../../components/user/Sidebar";

export const Request = () => {
  return (
    <>
      <Sidebar />
      <div className="container-sidebar request">
        <div className="content-request">
          <CardsRequest />
          <FormRequest />
        </div>
      </div>
    </>
  );
};
