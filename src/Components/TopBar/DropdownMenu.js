import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import menu from "../../Assets/icons/menu.svg";

import { Link } from "./Link";

export const DropdownMenu = () => {
  return (
    <Wrapper>
      <Icon src={menu} />
      <MenuItems>
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
  &:hover > ul {
    display: flex;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  height: 36px;
`;

const MenuItems = styled.ul`
  display: none;
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 48px;
`;

const Item = styled.li`
  text-align: center;
  background-color: ${COLORS.background};
  width: 100vw;
  padding-bottom: 8px;
`;
