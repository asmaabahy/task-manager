import { Outlet } from "react-router";
import SideMenu from "../components/SideMenu";

function DashboardLayout() {
  return (
    <>
      <main >
        <SideMenu />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default DashboardLayout;
