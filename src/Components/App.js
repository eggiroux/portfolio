import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { TopBar } from "./TopBar/index";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <TopBar />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
