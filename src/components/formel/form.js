import React, { Fragment } from "react";

const Form = ({ id, as = "submission", minW = "unset", maxW = "unset", onSubmit, children }) => {
  const compid = `${id}-${as}-form`;
  const subsstyles = {
    flex: "1",
    minWidth: minW,
    maxWidth: maxW,
    borderRadius: "var(--pixel-20)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "var(--pixel-20)",
    gap: "var(--pixel-15)",
  };
  const prtlstyles = {
    margin: "0",
    width: "100%",
    borderRadius: "var(--pixel-20)",
    backgroundColor: "var(--color-secondlight)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "var(--pixel-30) var(--pixel-20)",
    boxSizing: "border-box",
    gap: "var(--pixel-30)",
    maxWidth: "var(--pixel-500)",
  };

  return (
    <form id={compid} style={as === "portal" ? prtlstyles : subsstyles} onSubmit={onSubmit}>
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
    </form>
  );
};

export default Form;
