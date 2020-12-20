export const MaxWidthWrapper = ({ maxWidth = "500px", children }) => {
  const styles = {
    maxWidth: maxWidth,
    margin: "auto",
    padding: "0px 32px",
  };
  return <div style={styles}>{children}</div>;
};
