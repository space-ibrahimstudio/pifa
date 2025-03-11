import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWindow } from "@ibrahimstudio/react";
import { Button } from "@ibrahimstudio/button";
import { Input } from "@ibrahimstudio/input";
import { ISHome, ISSearch } from "@ibrahimstudio/icons";
import useApi from "../../libs/plugins/apis";
import { openLink } from "../../libs/plugins/helpers";
import useIcons from "../content/icons";
import TabButton, { TabButtonGen } from "../formel/buttons";
import styles from "./styles/navbar.module.css";

const Navbar = ({ id }) => {
  const navigate = useNavigate();
  const { apiGet } = useApi();
  const { width } = useWindow();
  const { Close } = useIcons();

  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [publicMenus, setPublicMenus] = useState([]);

  const compid = `${id}-top-navigation`;

  const handleSearch = (e) => {
    if (e.key === "Enter") navigate(`/pencarian/${query}`);
  };

  const getPublicMenus = async () => {
    try {
      const publicmenus = await apiGet("main", "categorynew");
      setPublicMenus(publicmenus && publicmenus.data && publicmenus.data.length > 0 ? publicmenus.data : []);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getPublicMenus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id={compid} className={`${styles.navbar} ${scrolled ? styles.scroll : ""} ${styles.pub}`}>
      <section className={styles.navTop}>
        <img className={styles.navLogoIcon} alt="" src="/png/pifa-logo.png" />
        <div className={styles.navOption}>
          <Button id={`${compid}-action`} variant="line" color="var(--color-primary)" size="sm" buttonText="Beriklan Disini" onClick={() => openLink({ url: "https://pifa.co.id/login" })} />
          <Button id={`${compid}-login`} size="sm" buttonText="Login" onClick={() => openLink({ url: "https://pifa.co.id/login" })} />
        </div>
      </section>
      <section className={`${styles.navBottom} ${styles.pub}`}>
        {searchOpen && width <= 580 ? (
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "0", flexShrink: "0", boxSizing: "border-box", flex: "1" }} onKeyDown={handleSearch}>
            <Input id={`${compid}-search`} labeled={false} type="text" name="query" value={query} placeholder="Cari Berita Terkini" onChange={(e) => setQuery(e.target.value)} leadingicon={<ISSearch />} />
          </div>
        ) : (
          <nav className={`${styles.navMenu} ${styles.pub}`}>
            <TabButtonGen id={`${compid}-beranda`} text="Beranda" path="/" startContent={<ISHome />} />
            <div className={`${styles.navMenuHscroll} ${styles.pub}`}>
              <div className={styles.navMenuItems}>
                {publicMenus.map((menu, index) => (
                  <TabButton key={index} id={`${compid}-${menu.slug}`} path={`/berita/kategori/${menu.slug}`} text={menu.nama_kategori_berita} />
                ))}
              </div>
            </div>
          </nav>
        )}
        {width > 580 ? (
          <div className={styles.navSearch} onKeyDown={handleSearch}>
            <Input id={`${compid}-search`} labeled={false} type="text" name="query" value={query} placeholder="Cari Berita Terkini" onChange={(e) => setQuery(e.target.value)} trailingicon={<ISSearch />} />
          </div>
        ) : (
          <Button id={searchOpen ? `${compid}-close-search` : `${compid}-open-search`} size="sm" variant="hollow" display="icon" color="var(--color-secondary)" iconContent={searchOpen ? <Close /> : <ISSearch />} onClick={() => setSearchOpen(!searchOpen)} />
        )}
      </section>
    </header>
  );
};

export default Navbar;
