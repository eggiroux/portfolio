import styled from "styled-components";

export const DesktopOnlyWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
