import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;