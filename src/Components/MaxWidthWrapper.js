export const MaxWidthWrapper = ({ maxWidth = "500px", children }) => {
  const styles = {
    maxWidth: maxWidth,
    margin: "0 auto",
    padding: "0px 32px",
  };
  return <div style={styles}>{children}</div>;
};
