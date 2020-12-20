import React from "react";
import styled from "styled-components";

import css from "../../Assets/icons/Stack/css.svg";
import git from "../../Assets/icons/Stack/git.svg";
import html from "../../Assets/icons/Stack/html.svg";
import javascript from "../../Assets/icons/Stack/javascript.svg";
import mongodb from "../../Assets/icons/Stack/mongodb.svg";
import nodejs from "../../Assets/icons/Stack/nodejs.svg";
import react from "../../Assets/icons/Stack/react.svg";
import vscode from "../../Assets/icons/Stack/vscode.svg";

import { SkillItem } from "./skillItem";
import { COLORS } from "../../constants";

export const Skills = () => {
  return (
    <Wrapper>
      <Header>Skills</Header>
      <SkillList>
        <SkillItem iconSrc={javascript} name={"JavaScript"} />
        <SkillItem iconSrc={nodejs} name={"NodeJS"} />
        <SkillItem iconSrc={react} name={"ReactJS"} />
        <SkillItem iconSrc={html} name={"HTML"} />
        <SkillItem iconSrc={css} name={"CSS"} />
        <SkillItem iconSrc={mongodb} name={"MongoDB"} />
        <SkillItem iconSrc={vscode} name={"VSCode"} />
        <SkillItem iconSrc={git} name={"Git"} />
      </SkillList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-left: 32px;
  padding-right: 32px;
`;

const Header = styled.h2`
  color: ${COLORS.passiveText};
  text-align: center;
  font-size: 1.35rem;
  margin-top: 48px;
  margin-bottom: 24px;
`;
const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
