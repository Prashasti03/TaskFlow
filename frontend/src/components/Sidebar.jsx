import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="taskflow-sidebar bg-dark text-white d-flex flex-column">
      <div className="p-3 border-bottom border-secondary">
        <h4 className="fw-bold mb-0">TaskFlow</h4>

        <small className="text-secondary">
          Project Management
        </small>
      </div>

      <nav className="nav flex-column p-3 gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link taskflow-nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-link taskflow-nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `nav-link taskflow-nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          Tasks
        </NavLink>
      </nav>

      <div className="mt-auto p-3 border-top border-secondary">
        <small className="text-secondary">
          TaskFlow v1.0
        </small>
      </div>
    </aside>
  );
}

export default Sidebar;