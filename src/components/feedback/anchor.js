import React from "react";

const hostname = process.env.REACT_APP_DOMAIN_AREA;

const A = ({ type = "int", slug = "/", link = hostname }) => {
  const isCrawl = typeof window !== "undefined" && window.navigator.userAgent === "IbrahimStudio";
  const compid = `open-${type === "int" ? `${hostname}${slug}` : link}`;
  const compcss = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 100, backgroundColor: "transparent" };

  if (isCrawl) return null;
  else return <a id={compid} href={type === "int" ? slug : link} style={compcss} />;
};

export default A;
