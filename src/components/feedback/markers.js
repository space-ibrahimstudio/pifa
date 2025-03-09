import React, { Fragment } from "react";
import { toPathname } from "../../libs/plugins/helpers";
import { SourceButton } from "../formel/buttons";
import heacss from "./styles/section-head.module.css";

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

const SectionHead = ({ id, noSource = false, to, children }) => {
  const compid = `${id}-section-head`;
  const headto = to ? to : "/";

  return (
    <section id={compid} className={heacss.sectionHead}>
      <header id={`${compid}-wrap`} className={heacss.sectionTitlewrap}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Fragment) {
              return React.Children.map(child.props.children, (frag_child) => {
                if (React.isValidElement(frag_child)) {
                  const combinedid = frag_child.props.id ? `${compid}-${frag_child.props.id}` : compid;
                  return React.cloneElement(frag_child, { id: combinedid });
                } else return frag_child;
              });
            } else {
              const combinedid = child.props.id ? `${compid}-${child.props.id}` : compid;
              return React.cloneElement(child, { id: combinedid });
            }
          } else return child;
        })}
        {/* {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Fragment) {
              return <Fragment>{React.Children.map(child.props.children, (frag_child) => (React.isValidElement(frag_child) ? React.cloneElement(frag_child, { id: compid }) : frag_child))}</Fragment>;
            }
            return React.cloneElement(child, { id: compid });
          }
          return child;
        })} */}
      </header>
      {!noSource && <SourceButton id={compid} to={headto} />}
    </section>
  );
};

export default SectionHead;
