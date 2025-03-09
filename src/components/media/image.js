import React, { useEffect, useState } from "react";
import { toPathname } from "../../libs/plugins/helpers";
import poscss from "./styles/image.module.css";

const Img = ({ className, style, alt = "", src = "/img/fallback.jpg", onClick }) => {
  const compid = alt ? toPathname(alt) : "";

  return <img id={compid} className={className} style={style} alt={alt} loading="lazy" src={src} onClick={onClick} />;
};

export default Img;
