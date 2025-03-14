import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useWindow } from "@ibrahimstudio/react";
import useApi from "../libs/plugins/apis";
import { useDocument } from "../libs/plugins/helpers";
import { SEO } from "../libs/plugins/seo";
import useGraph from "../components/content/graph";
import SectionHead from "../components/feedback/markers";
import { TagsButton } from "../components/formel/buttons";
import NewsCard, { CatCard } from "../components/layout/cards";
import Page, { Container, Section } from "../components/layout/frames";
import { NewsSummaryGroup, News3Group, SectionGroup } from "../components/layout/groups";
import Slider from "../components/layout/slider";
import { AdBanner } from "../components/media/image";

const HomePage = ({ imgdomain }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindow();
  const { short } = useDocument();
  const { apiRead, apiGet } = useApi();
  const { H1, Span } = useGraph();

  const [limit, setLimit] = useState(13);
  const [loading, setLoading] = useState(false);
  const [trendingPostData, setTrendingPostData] = useState([]);
  const [ads, setAds] = useState([]);
  const [catNewsData, setCatNewsData] = useState([]);
  const [catLocalData, setCatLocalData] = useState([]);
  const [trendTagData, setTrendTagData] = useState([]);
  const [latestPostData, setLatestPostData] = useState([]);
  const [popularPostData, setPopularPostData] = useState([]);

  const id = `${short}-home`;

  const renderLocalCat = (item) => <CatCard id={item.id} catname={item.nama_kategori_daerah} image={item.img} onClick={() => window.open(`https://${item.subdomain}.pifa.co.id`, "_blank")} />;
  const renderAds = (item) => <AdBanner alt={item.idbanner} src={`${imgdomain}/images/banner/${item.bannerimg}`} />;

  const fetchBannerData = async () => {
    try {
      const response = await apiGet("main", "bannerview");
      setAds(response && response.data && response.data.length > 0 ? response.data : []);
    } catch (error) {
      console.error("error fetching banner data:", error);
    }
  };

  const fetchCatNewsData = async () => {
    try {
      const response = await apiGet("main", "categorynew");
      setCatNewsData(response && response.data && response.data.length > 0 ? response.data : []);
    } catch (error) {
      console.error("error fetching category data:", error);
    }
  };

  const fetchCatLocalData = async () => {
    try {
      const response = await apiGet("main", "categoryarea");
      setCatLocalData(response && response.data && response.data.length > 0 ? response.data : []);
    } catch (error) {
      console.error("error fetching local category data:", error);
    }
  };

  const fetchTrendTagData = async () => {
    try {
      const response = await apiGet("main", "viewtag");
      setTrendTagData(response && response.data && response.data.length > 0 ? response.data : []);
    } catch (error) {
      console.error("error fetching trending tag data:", error);
    }
  };

  const fetchTrendingPostData = async (newLimit) => {
    if (loading) return;
    const formData = new FormData();
    formData.append("limit", newLimit);
    formData.append("hal", "0");
    setLoading(true);
    try {
      const trendingdata = await apiRead(formData, "main", "trendingnew");
      setTrendingPostData(trendingdata && trendingdata.data && trendingdata.data.length > 0 ? trendingdata.data : []);
    } catch (error) {
      console.error("error fetching trending post data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestPosts = async () => {
    const formData = new FormData();
    formData.append("limit", "3");
    formData.append("hal", "0");
    try {
      const postsdata = await apiRead(formData, "main", "latestnew");
      setLatestPostData(postsdata && postsdata.data && postsdata.data.length > 0 ? postsdata.data : []);
    } catch (error) {
      console.error("error fetching latest posts:", error);
    }
  };

  const fetchPopularPosts = async () => {
    const formData = new FormData();
    formData.append("limit", "3");
    formData.append("hal", "0");
    try {
      const postsdata = await apiRead(formData, "main", "popularnew");
      setPopularPostData(postsdata && postsdata.data && postsdata.data.length > 0 ? postsdata.data : []);
    } catch (error) {
      console.error("error fetching popular posts:", error);
    }
  };

  const adSections = [
    { content: ads, renderContent: renderAds, style: { minWidth: "100%" } },
    { content: ads, renderContent: renderAds, style: { minWidth: "100%" } },
    { content: ads, renderContent: renderAds, style: { minWidth: "100%" } },
  ];

  const combinedSections = [];
  let adIndex = 0;
  for (let i = 0; i < catNewsData.length; i++) {
    const section = catNewsData[i];
    combinedSections.push({ type: "news", data: section });
    if ((i + 1) % 3 === 0 && adIndex < adSections.length) {
      combinedSections.push({ type: "ad", data: adSections[adIndex] });
      adIndex++;
    }
  }

  useEffect(() => {
    fetchBannerData();
    fetchCatNewsData();
    fetchLatestPosts();
    fetchCatLocalData();
    fetchTrendTagData();
    fetchPopularPosts();
  }, [location]);

  useEffect(() => {
    fetchTrendingPostData(limit);
  }, [location, limit]);

  useEffect(() => {
    setLimit(13);
  }, [location]);

  return (
    <Fragment>
      <SEO title="Beranda" route="/" />
      <Page pageid={id}>
        <Container id="static-ads" alignItems="center" gap="var(--pixel-10)">
          <Slider content={ads} renderContent={renderAds} contentStyle={{ minWidth: "100%" }} />
        </Container>
        <Container id="trending-tag" alignItems="center" padding={width <= 910 ? (width > 700 ? "0 var(--pixel-30)" : "0 var(--pixel-20)") : "0 var(--pixel-70)"}>
          <Section isWrap justifyContent="center" padding="var(--pixel-10) 0" gap="var(--pixel-10)">
            {trendTagData.map((tag, index) => (
              <TagsButton id={tag.slug} key={index} text={tag.nama_kategori_tag} onClick={() => navigate(`/berita/tag/${tag.slug}`)} />
            ))}
          </Section>
        </Container>
        <Container id="trending-post" isWrap justifyContent="center" gap="var(--pixel-10)">
          <News3Group posts={trendingPostData.slice(0, 3)} />
          <Section flex="1" direction="column" alignItems="center" justifyContent="center" minWidth="var(--pixel-300)" maxWidth={width >= 464 ? "var(--pixel-400)" : "unset"} gap="var(--pixel-10)">
            <NewsSummaryGroup id={id} isPortrait={width < 464 ? true : false} variant="primary" title="Trending" posts={trendingPostData.slice(3)} setLimit={setLimit} loading={loading} to="/berita/insight/trending" />
          </Section>
        </Container>
        <Container id="static-ads" alignItems="center" gap="var(--pixel-10)">
          <Slider content={ads} renderContent={renderAds} contentStyle={{ minWidth: "100%" }} />
        </Container>
        <Container id="latest-post" alignItems="center" gap="var(--pixel-10)">
          <SectionHead to="/berita/insight/terbaru">
            <H1>
              {`Berita `}
              <Span color="var(--color-primary)">Terbaru</Span>
            </H1>
          </SectionHead>
          <Section direction="row" gap="var(--pixel-10)" overflow="x-open">
            {latestPostData.map((post, index) => (
              <NewsCard key={index} title={post.judul_berita} short={post.isi_berita} tag={post.nama_kategori_berita} image={`${imgdomain}/images/img_berita/${post.img_berita}`} loc={post.penulis_berita} date={post.tanggal_berita} slug={`/berita/${post.slug}`} onClick={() => navigate(`/berita/${post.slug}`)} />
            ))}
          </Section>
        </Container>
        <Container id="local-category" alignItems="center" gap="var(--pixel-10)">
          <SectionHead noSource>
            <H1>
              {`Berita `}
              <Span color="var(--color-primary)">Kabar Daerah</Span>
            </H1>
          </SectionHead>
          <Slider content={catLocalData} renderContent={renderLocalCat} />
        </Container>
        <Container id="static-ads" alignItems="center" gap="var(--pixel-10)">
          <Slider content={ads} renderContent={renderAds} contentStyle={{ minWidth: "100%" }} />
        </Container>
        <Container id="popular-post" alignItems="center" gap="var(--pixel-10)">
          <SectionHead to="/berita/insight/populer">
            <H1>
              {`Berita `}
              <Span color="var(--color-primary)">Populer</Span>
            </H1>
          </SectionHead>
          <Section direction="row" gap="var(--pixel-10)" overflow="x-open">
            {popularPostData.map((post, index) => (
              <NewsCard key={index} title={post.judul_berita} short={post.isi_berita} tag={post.nama_kategori_berita} image={`${imgdomain}/images/img_berita/${post.img_berita}`} loc={post.penulis_berita} date={post.tanggal_berita} slug={`/berita/${post.slug}`} onClick={() => navigate(`/berita/${post.slug}`)} />
            ))}
          </Section>
        </Container>
        {combinedSections.map((section, index) => (
          <Fragment key={index}>
            {section.type === "ad" ? (
              <Container id="static-ads" alignItems="center" gap="var(--pixel-10)">
                <Slider content={ads} renderContent={renderAds} contentStyle={{ minWidth: "100%" }} />
              </Container>
            ) : (
              <Container id={`${section.data.slug}-post`} alignItems="center" gap="var(--pixel-10)">
                <SectionHead to={`/berita/kategori/${section.data.slug}`}>
                  <H1>
                    {`Berita `}
                    <Span color="var(--color-primary)">{section.data.nama_kategori_berita}</Span>
                  </H1>
                </SectionHead>
                <SectionGroup catId={section.data.id} scope={section.data.nama_kategori_berita} slug={section.data.slug} />
              </Container>
            )}
          </Fragment>
        ))}
      </Page>
    </Fragment>
  );
};

export default HomePage;
