import React, { useEffect, Fragment } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import WorkerUpdater from "./components/feedback/worker-updater";
import FallbackPage from "./pages/fallback";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import InsightPage from "./pages/insight";
import CompanyPage from "./pages/company";
import CategoryPage from "./pages/category";
import PostPage from "./pages/post";
import TagPage from "./pages/tag";
import SearchPage from "./pages/search";

const imgdomain = process.env.REACT_APP_API_URL;
const subid = process.env.REACT_APP_DOMAIN_AREA_ID;

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <WorkerUpdater />
      <Routes>
        <Route path="/" element={<HomePage imgdomain={imgdomain} subid={subid} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/informasi/:cslug" element={<CompanyPage imgdomain={imgdomain} />} />
        <Route path="/berita/insight/:islug" element={<InsightPage imgdomain={imgdomain} subid={subid} />} />
        <Route path="/berita/kategori/:category" element={<CategoryPage imgdomain={imgdomain} subid={subid} />} />
        <Route path="/berita/:slug" element={<PostPage imgdomain={imgdomain} />} />
        <Route path="/berita/tag/:slug" element={<TagPage imgdomain={imgdomain} />} />
        <Route path="/pencarian/:query" element={<SearchPage imgdomain={imgdomain} />} />
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
      </Routes>
    </Fragment>
  );
}

export default App;
