import styled from "styled-components";
import { COLORS } from "../../constants";

export const Link = ({ href, children }) => {
  return (
    <Wrapper href={href} target="_blank">
      {children} <Underline />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  color: inherit;
  box-sizing: border-box;

  &:hover > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-left: 16px;
  }
`;

const Underline = styled.div`
  position: relative;
  width: 0;
  height: 4px;
  background-color: ${COLORS.highlightedText};
  transition: all 125ms;

  @media (max-width: 768px) {
    display: none;
  }
`;
