import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import home from "../../Assets/icons/home.svg";

import { Icon } from "../Icon";
import { DesktopNav } from "./DesktopNav";
import { DropdownMenu } from "./DropdownMenu";

export const TopBar = () => {
  return (
    <Wrapper>
      <Icon src={home} />

      <DesktopNav />
      <DropdownMenu />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background-color: ${COLORS.background};
  border-bottom: 4px solid ${COLORS.passiveText};
`;
