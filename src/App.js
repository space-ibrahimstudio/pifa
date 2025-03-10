import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import useAuth from "./libs/guards/auth";
import ErrorPage from "./pages/error";
import RePage from "./pages/re";
import DashboardSlugPage from "./pages/dashboard/slug";
import DashboardUpdatePage from "./pages/dashboard/update";

const imgdomain = process.env.REACT_APP_API_URL;
const parentdomain = process.env.REACT_APP_DOMAIN_MAIN;

function App() {
  const location = useLocation();
  const { isLoggedin } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={isLoggedin ? <Navigate to="/berita/isi-berita" replace /> : <RePage to={parentdomain} external />} />
      <Route path="/:scope/:slug" element={isLoggedin ? <DashboardSlugPage imgdomain={imgdomain} /> : <RePage to={parentdomain} external />} />
      <Route path="/:uscope/:uslug/update/:params" element={isLoggedin ? <DashboardUpdatePage imgdomain={imgdomain} /> : <RePage to={parentdomain} external />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
