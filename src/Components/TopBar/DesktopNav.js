import React from "react";
import styled from "styled-components";

import { DesktopOnlyWrapper } from "../DesktopOnlyWrapper";
import { Link } from "./Link";

export const DesktopNav = () => {
  return (
    <DesktopOnlyWrapper>
      <Links>
        <Link href="https://www.linkedin.com/in/egiroux/">Projects</Link>
        <Link>Contact</Link>
      </Links>
    </DesktopOnlyWrapper>
  );
};

const Links = styled.div`
  display: flex;
`;
