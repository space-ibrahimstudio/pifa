import React from "react";
import { toPathname } from "../../libs/plugins/helpers";

export const NewsTag = ({ id, name }) => {
  const compid = (name && `${id}-news-tag-${toPathname(name)}`) || `${id}-news-tag`;
  const textstyles = { position: "relative", fontWeight: "600" };
  const lablstyles = {
    zIndex: "1",
    borderRadius: "9999px",
    backgroundColor: "var(--color-primary)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--pixel-5) var(--pixel-10)",
    textAlign: "center",
    fontSize: "var(--font-tiny)",
    color: "var(--color-secondlight)",
    fontFamily: "var(--font-inter)",
  };

  return (
    <section id={compid} style={lablstyles}>
      <p id={`${compid}-text`} style={textstyles}>
        {name}
      </p>
    </section>
  );
};
