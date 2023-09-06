import Sidebar from '../../components/admin/Sidebar'
import { Dash } from '../../components/admin/Dash'

/**
 * The DashboardAdmin component is responsible for rendering the administrator dashboard.
 * It includes a sidebar navigation menu (`Sidebar`) and the main dashboard content (`Dash`).
 */
export const DashboardAdmin = () => {
  return (
    <>
      {/* Sidebar component for administrator navigation */}
      <Sidebar />

      {/* Dash component for the main administrator dashboard content */}
      <Dash />
    </>
  )
}
