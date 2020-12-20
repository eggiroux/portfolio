import React from "react";
import styled from "styled-components";

import avatarSrc from "../../Assets/img/portrait.jpeg";

import { COLORS } from "../../constants";

export const About = () => {
  return (
    <Wrapper>
      <Header>Hi! I'm Etienne Giroux!</Header>
      <Avatar />
      <Paragraph>
        I am a veteran game designer turned web developer. I come from 10+ years
        of building fun experiences and engaging game systems.
      </Paragraph>
      <Paragraph>
        In 2020, following a life-long urge to be able to build these
        experiences myself, I jumped on the opportunity to finally learn to
        code.
      </Paragraph>
      <Paragraph>
        With me on board, you get a freshly minted and motivated developer, but
        you also get — and I throw this in for free — a tried and true
        team-player and leader.
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-left: 32px;
  padding-right: 32px;
`;

const Avatar = styled.div`
  border-radius: 100%;
  margin: 0 auto;

  margin-bottom: 32px;
  background-image: url(${avatarSrc});
  background-size: 140%;
  background-position: 50% 18%;
  height: 200px;
  width: 200px;
`;

const Header = styled.h2`
  color: ${COLORS.passiveText};
  text-align: center;
  font-size: 1.35rem;
  margin-bottom: 32px;
`;

const Paragraph = styled.p`
  color: ${COLORS.passiveText};
  text-align: left;
  font-size: 1.1rem;
  margin-top: 32px;
`;
