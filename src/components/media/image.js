import React from "react";
import { toPathname } from "../../libs/plugins/helpers";

const Img = ({ className, style, alt = "", src = "/img/fallback.jpg", onClick }) => {
  const compid = alt ? toPathname(alt) : "";

  return <img id={compid} className={className} style={style} alt={alt} loading="lazy" src={src} onClick={onClick} />;
};

export default Img;
