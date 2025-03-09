import React, { Fragment } from "react";

const Fieldset = ({ id, gap = "var(--pixel-10)", children }) => {
  const compid = `${id}-fieldset`;
  const basestyles = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap };
  const wrapstyles = { alignSelf: "stretch", justifyContent: "center", textAlign: "left", fontSize: "var(--font-sm)", color: "var(--color-hint)", fontFamily: "var(--font-inter)" };
  const bodystyles = { flex: "1", flexWrap: "wrap", justifyContent: "flex-start" };

  return (
    <section id={compid} style={{ ...basestyles, ...wrapstyles }}>
      <div style={{ ...basestyles, ...bodystyles }}>
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
      </div>
    </section>
  );
};

export default Fieldset;
