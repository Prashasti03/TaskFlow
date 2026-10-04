import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MainLayout() {
  return (
    <div className="taskflow-layout d-flex min-vh-100">
      <Sidebar />

      <div className="taskflow-main flex-grow-1 d-flex flex-column">
        <Topbar />

        <main className="flex-grow-1 p-3 p-md-4 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;