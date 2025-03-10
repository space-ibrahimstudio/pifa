import React, { useEffect, Fragment } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import useAuth from "./libs/guards/auth";
import WorkerUpdater from "./components/feedback/worker-updater";
import FallbackPage from "./pages/fallback";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import InsightPage from "./pages/insight";
import CompanyPage from "./pages/company";
import CategoryPage from "./pages/category";
import PostPage from "./pages/post";
import LoginPage from "./pages/login";
import TagPage from "./pages/tag";
import SearchPage from "./pages/search";
import DashboardSlugPage from "./pages/dashboard/slug";
import DashboardUpdatePage from "./pages/dashboard/update";

function App() {
  const location = useLocation();
  const { isLoggedin } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    // <Fragment>
    //   <WorkerUpdater />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/informasi/:cslug" element={<CompanyPage />} />
      <Route path="/berita/insight/:islug" element={<InsightPage />} />
      <Route path="/berita/kategori/:category" element={<CategoryPage />} />
      <Route path="/berita/:slug" element={<PostPage />} />
      <Route path="/berita/tag/:slug" element={<TagPage />} />
      <Route path="/pencarian/:query" element={<SearchPage />} />
      <Route path="/login" element={isLoggedin ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
      <Route path="/dashboard/:scope/:slug" element={isLoggedin ? <DashboardSlugPage /> : <Navigate to="/login" replace />} />
      <Route path="/dashboard/:uscope/:uslug/update/:params" element={isLoggedin ? <DashboardUpdatePage /> : <Navigate to="/login" replace />} />
      {/* no-index redirect */}
      <Route path="/informasi" element={<FallbackPage from="/informasi" to="/informasi/pedoman-media-siber" />} />
      <Route path="/berita/insight" element={<FallbackPage from="/berita/insight" to="/berita/insight/trending" />} />
      <Route path="/berita/kategori" element={<FallbackPage from="/berita/kategori" to="/berita/kategori/pifabiz" />} />
      <Route path="/berita" element={<FallbackPage from="/berita" to="/berita/insight/trending" />} />
      <Route path="/berita/tag" element={<FallbackPage from="/berita/tag" to="/berita/tag/indonesia" />} />
      <Route path="/pencarian" element={<FallbackPage from="/pencarian" to="/" />} />
      {/* common human assumption redirect */}
      <Route path="/about" element={<Navigate to="/informasi/tentang-pifa" replace />} />
      <Route path="/tentang" element={<Navigate to="/informasi/tentang-pifa" replace />} />
      <Route path="/help" element={<Navigate to="/informasi/faq" replace />} />
      <Route path="/bantuan" element={<Navigate to="/informasi/faq" replace />} />
      <Route path="/masuk" element={<Navigate to="/login" replace />} />
      <Route path="/dashboard" element={isLoggedin ? <Navigate to="/dashboard/berita/isi-berita" replace /> : <Navigate to="/login" replace />} />
    </Routes>
    // </Fragment>
  );
}

export default App;
