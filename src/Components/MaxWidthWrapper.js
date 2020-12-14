import react from "react";

export const MaxWidthWrapper = ({ maxWidth, children }) => {
  const styles = {
    maxWidth: maxWidth,
    margin: "auto",
    padding: "0px 16px",
  };
  return <div style={{ styles }}>{children}</div>;
};
