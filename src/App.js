import React, { useEffect, Fragment } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import useAuth from "./libs/guards/auth";
import WorkerUpdater from "./components/feedback/worker-updater";
import FallbackPage from "./pages/fallback";
import RePage from "./pages/re";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import InsightPage from "./pages/insight";
import CompanyPage from "./pages/company";
import CategoryPage from "./pages/category";
import PostPage from "./pages/post";
import LoginPage from "./pages/login";
import TagPage from "./pages/tag";
import SearchPage from "./pages/search";

const domain = process.env.REACT_APP_DOMAIN_MAIN;
const imgdomain = process.env.REACT_APP_API_URL;

function App() {
  const location = useLocation();
  const { isLoggedin } = useAuth();

  const isCrawl = typeof window !== "undefined" && window.navigator.userAgent === "IbrahimStudio";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    // <Fragment>
    //   <WorkerUpdater />
    <Routes>
      <Route path="/" element={<HomePage imgdomain={imgdomain} />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/informasi/:cslug" element={<CompanyPage imgdomain={imgdomain} />} />
      <Route path="/berita/insight/:islug" element={<InsightPage imgdomain={imgdomain} />} />
      <Route path="/berita/kategori/:category" element={<CategoryPage imgdomain={imgdomain} />} />
      <Route path="/berita/:slug" element={<PostPage imgdomain={imgdomain} />} />
      <Route path="/berita/tag/:slug" element={<TagPage imgdomain={imgdomain} />} />
      <Route path="/pencarian/:query" element={<SearchPage imgdomain={imgdomain} />} />
      <Route path="/login" element={isLoggedin ? <RePage to={`${domain}/dashboard`} external /> : <LoginPage />} />
      {/* no-index redirect */}
      <Route path="/informasi" element={isCrawl ? <FallbackPage from="/informasi" /> : <Navigate to="/informasi/pedoman-media-siber" />} />
      <Route path="/berita/insight" element={isCrawl ? <FallbackPage from="/berita/insight" /> : <Navigate to="/berita/insight/trending" />} />
      <Route path="/berita/kategori" element={isCrawl ? <FallbackPage from="/berita/kategori" /> : <Navigate to="/berita/kategori/pifabiz" />} />
      <Route path="/berita" element={isCrawl ? <FallbackPage from="/berita" /> : <Navigate to="/berita/insight/trending" />} />
      <Route path="/berita/tag" element={isCrawl ? <FallbackPage from="/berita/tag" /> : <Navigate to="/berita/tag/indonesia" />} />
      <Route path="/pencarian" element={isCrawl ? <FallbackPage from="/pencarian" /> : <Navigate to="/" />} />
      {/* common human assumption redirect */}
      <Route path="/about" element={<Navigate to="/informasi/tentang-pifa" replace />} />
      <Route path="/tentang" element={<Navigate to="/informasi/tentang-pifa" replace />} />
      <Route path="/help" element={<Navigate to="/informasi/faq" replace />} />
      <Route path="/bantuan" element={<Navigate to="/informasi/faq" replace />} />
      <Route path="/masuk" element={<Navigate to="/login" replace />} />
    </Routes>
    // </Fragment>
  );
}

export default App;
