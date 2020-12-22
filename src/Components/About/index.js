import React from "react";
import styled from "styled-components";

import avatarSrc from "../../Assets/img/portrait.jpeg";
import linkedInSrc from "../../Assets/icons/Social/linkedin.svg";
import gitHubSrc from "../../Assets/icons/Social/github.svg";
import twitterSrc from "../../Assets/icons/Social/twitter.svg";

import { COLORS } from "../../constants";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

export const About = () => {
  return (
    <Wrapper id={"about"}>
      <Header>Hi! I'm Etienne Giroux!</Header>
      <Subtitle>Full Stack Developer</Subtitle>

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
      <MaxWidthWrapper maxWidth={"400px"}>
        <SocialLinks>
          <SocialLink
            target="_blank"
            href="https://www.linkedin.com/in/egiroux/"
          >
            <Icon src={linkedInSrc} />
          </SocialLink>
          <SocialLink target="_blank" href="https://twitter.com/wargarine">
            <Icon src={twitterSrc} />
          </SocialLink>
          <SocialLink target="_blank" href="https://github.com/eggiroux">
            <Icon src={gitHubSrc} />
          </SocialLink>
        </SocialLinks>
      </MaxWidthWrapper>
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
  text-align: center;
  font-size: 1.35rem;
`;

const Subtitle = styled.p`
  margin-top: -16px;
  text-align: center;
  font-size: 1.1rem;
  font-style: italic;
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: 1.1rem;
  margin-top: 32px;
`;
const SocialLink = styled.a`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.passiveText};
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0 30px;
`;
