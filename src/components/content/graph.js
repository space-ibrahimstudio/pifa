import React, { Fragment } from "react";

const useGraph = () => {
  const getStyles = (flex, size, align, color, type, weight, opacity, style, decoration) => {
    return {
      flex,
      position: "relative",
      margin: "0",
      alignSelf: "stretch",
      textAlign: align,
      color,
      fontFamily: type === "primary" ? "var(--font-jakarta)" : "var(--font-inter)",
      fontSize: size === "inherit" ? "inherit" : `var(--font-${size})`,
      fontWeight: weight,
      fontStyle: style,
      textDecoration: decoration,
      opacity,
      lineHeight: type === "primary" ? "unset" : "135%",
      margin: "0",
    };
  };

  const H1 = ({ id, flex = "1", size = "md", align = "left", color = "inherit", weight = "700", style = "normal", decoration = "unset", type = "primary", opacity = "1", children }) => {
    const compid = `${id}-h1`;

    return (
      <h1 id={compid} style={getStyles(flex, size, align, color, type, weight, opacity, style, decoration)}>
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
      </h1>
    );
  };

  const Span = ({ id, flex = "1", size = "inherit", align = "left", color = "inherit", weight = "inherit", style = "normal", decoration = "unset", type = "secondary", opacity = "1", children }) => {
    const compid = `${id}-span`;

    return (
      <span id={compid} style={getStyles(flex, size, align, color, type, weight, opacity, style, decoration)}>
        {children}
      </span>
    );
  };

  const P = ({ id, flex = "1", size = "sm", align = "left", color = "inherit", weight = "500", style = "normal", decoration = "unset", type = "secondary", opacity = "1", children }) => {
    const compid = `${id}-paragraph`;

    return (
      <p id={compid} style={getStyles(flex, size, align, color, type, weight, opacity, style, decoration)}>
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
      </p>
    );
  };

  return { H1, Span, P };
};

export default useGraph;
