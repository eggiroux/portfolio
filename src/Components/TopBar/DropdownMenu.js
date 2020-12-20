import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import menu from "../../Assets/icons/menu.svg";

import { Link } from "./Link";
import { Icon } from "../Icon";

export const DropdownMenu = () => {
  return (
    <Wrapper>
      <Icon src={menu} />
      <MenuItems>
        <Item>
          <Link href="https://www.linkedin.com/in/egiroux/">Skills</Link>
        </Item>
        <Item>
          <Link href="https://www.linkedin.com/in/egiroux/">Projects</Link>
        </Item>
        <Item>
          <Link>Contact</Link>
        </Item>
      </MenuItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 36px;
  &:hover > ul {
    display: flex;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItems = styled.ul`
  display: none;
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 44px;
  border-bottom: 4px solid ${COLORS.passiveText};
`;

const Item = styled.li`
  text-align: center;
  background-color: ${COLORS.background};
  color: ${COLORS.passiveText};
  width: 100vw;
  padding-bottom: 8px;
  &:hover {
    color: ${COLORS.highlightedText};
  }
`;
