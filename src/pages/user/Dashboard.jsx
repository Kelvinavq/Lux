import Sidebar from '../../components/user/Sidebar'
import { Dash } from '../../components/user/Dash'

/**
 * The Dashboard component is responsible for rendering the user dashboard page
 * when a user is logged in. It includes a sidebar navigation menu and the main
 * dashboard content.
 */
export const Dashboard = () => {
  return (
    <>
      {/* Sidebar component for user navigation */}
      <Sidebar />

      {/* Dash component for the main dashboard content */}
      <Dash />
    </>
  )
}
