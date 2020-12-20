import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

export const SkillItem = ({ iconSrc, name }) => {
  return (
    <Wrapper>
      <Icon src={iconSrc} alt={`${name}'s icon`} />
      <Paragraph>{name}</Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

const Paragraph = styled.p`
  color: ${COLORS.passiveText};
  text-align: center;
  font-size: 1.1rem;
  margin-top: 4px;
`;
