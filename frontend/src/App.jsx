

import {  Routes, Route, useLocation } from "react-router-dom";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateFood from "./pages/CreateFood";
import EditFood from "./pages/EditFood";
import DeleteFood from "./pages/DeleteFood";
// import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import AdminNavbar from "./pages/AdminNavbar";
import Home from "./pages/Home";



const App =()=> {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin")




  return (
    
    <div>
          {isAdminRoute ? <AdminNavbar/> : <Navbar/>}

      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
     

      </Routes>
      
    </div>
  )
}

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/food/create" element={<CreateFood />} />
      <Route path="/food/edit/:id" element={<EditFood />} />
      <Route path="/food/delete/:id" element={<DeleteFood />} />

    </Routes>
  );
};

export default App