import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import useAuth from "./libs/guards/auth";
import ErrorPage from "./pages/error";
import DashboardSlugPage from "./pages/dashboard/slug";
import DashboardUpdatePage from "./pages/dashboard/update";

function App() {
  const location = useLocation();
  const { isLoggedin } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/:scope/:slug" element={isLoggedin ? <DashboardSlugPage /> : <Navigate to="*" replace />} />
      <Route path="/:uscope/:uslug/update/:params" element={isLoggedin ? <DashboardUpdatePage /> : <Navigate to="*" replace />} />
      {/* no-index redirect */}
      <Route path="/" element={isLoggedin ? <Navigate to="/berita/isi-berita" replace /> : <Navigate to="*" replace />} />
    </Routes>
  );
}

export default App;
