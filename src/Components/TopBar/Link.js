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
  color: hsl(149deg, 46%, 55%);
  margin-left: 16px;
  box-sizing: border-box;

  &:hover {
    color: ${COLORS.highlightedText};
  }

  &:hover > div {
    width: 100%;
  }
`;

const Underline = styled.div`
  position: relative;

  width: 0;
  height: 4px;
  background-color: ${COLORS.highlightedText};
  transition: all 75ms;

  @media (max-width: 768px) {
    display: none;
  }
`;
