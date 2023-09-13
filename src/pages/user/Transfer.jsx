import { CardsTransfer } from "../../components/user/CardsTransfer";
import { FormTransfer } from "../../components/user/FormTransfer";
import Sidebar from "../../components/user/Sidebar";

export const Transfer = () => {
  return (
    <>
      <Sidebar />
      <div className="container-sidebar transfer">
        <div className="content-transfer">
          <CardsTransfer />
          <FormTransfer />
        </div>
      </div>
    </>
  );
};
