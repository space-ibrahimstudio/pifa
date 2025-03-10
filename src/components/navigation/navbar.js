import React, { useState, useEffect } from "react";
import { useContent } from "@ibrahimstudio/react";
import { Button } from "@ibrahimstudio/button";
import { ISHome } from "@ibrahimstudio/icons";
import useApi from "../../libs/plugins/apis";
import useAuth from "../../libs/guards/auth";
import { toPathname, openLink } from "../../libs/plugins/helpers";
import TabButton, { TabButtonGen } from "../formel/buttons";
import styles from "./styles/navbar.module.css";

const Navbar = ({ id }) => {
  const { apiRead } = useApi();
  const { toTitleCase } = useContent();
  const { logout, userData } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [privateMenus, setPrivateMenus] = useState([]);

  const compid = `${id}-top-navigation`;

  const handleLogout = () => logout();
  const getPrivateMenus = async () => {
    const formData = new FormData();
    const { token_activation, level } = userData;
    formData.append("data", JSON.stringify({ secret: token_activation, level: level.toUpperCase() }));
    try {
      const privatemenus = await apiRead(formData, "office", "viewmenu");
      setPrivateMenus(privatemenus && privatemenus.data && privatemenus.data.length > 0 ? privatemenus.data : []);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    getPrivateMenus();
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
    <header id={compid} className={`${styles.navbar} ${scrolled ? styles.scroll : ""}`}>
      <section className={styles.navTop}>
        <img className={styles.navLogoIcon} alt="" src="/png/pifa-logo.png" />
        <div className={styles.navOption}>
          <Button id={`${compid}-logout`} size="sm" buttonText="Keluar" onClick={handleLogout} />
        </div>
      </section>
      <section className={styles.navBottom}>
        <nav className={styles.navMenu}>
          <TabButtonGen id={`${compid}-beranda`} type="href" text="Beranda" onClick={() => openLink({ url: "https://pifa.co.id" })} startContent={<ISHome />} />
          <div className={styles.navMenuHscroll}>
            <div className={styles.navMenuItems}>
              {privateMenus.map((menu, index) => (
                <TabButton key={index} type="sub" id={`${compid}-${menu["Menu Utama"].idmenu}`} path={toPathname(menu["Menu Utama"].menu)} text={toTitleCase(menu["Menu Utama"].menu)} subTabData={menu["Sub Menu"]} />
              ))}
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
