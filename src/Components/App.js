import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { COLORS } from "../constants";

import { TopBar } from "./TopBar";
import { About } from "./About";
import { Skills } from "./Skills";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <TopBar />
      <About />
      <Skills />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.background};
`;
