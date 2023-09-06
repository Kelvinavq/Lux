import Sidebar from "../../components/admin/Sidebar";
import {MarketingTools} from "../../components/admin/MarketingTools"


/**
   * The Tools component is responsible for providing administrators with uploading PDF documents
   * and videos. Includes a `Sidebar` navigation menu and the
   * marketing tools management interface (`MarketingTools`).
   */
export const Tools = () => {
  return (
    <>
      {/* Sidebar component for admin navigation */}
      <Sidebar />

      {/* MarketingTools component to manage marketing tools */}
      <MarketingTools />
    </>
  );
};