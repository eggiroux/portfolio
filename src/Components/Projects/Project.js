import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import { MaxWidthWrapper } from "../MaxWidthWrapper";

export const Project = ({ name, imageSrc, description, url, stack }) => {
  return (
    <Wrapper>
      <Header>{name}</Header>
      <Image src={imageSrc} />
      <p>{description}</p>
      <a href={url} target="_blank">
        <Url>Visit: {url}</Url>
      </a>
      <Stack>
        {stack.map((icon) => {
          return <Icon src={icon} />;
        })}
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  min-width: 100%;
  scroll-snap-align: start;
`;

const Header = styled.h3`
  color: ${COLORS.passiveText};
  text-align: center;
  font-size: 1.1rem;
`;

const Image = styled.img`
  display: block;
  border-radius: 12px;
  margin: 0 auto;
  max-width: 60%;
`;

const Url = styled.p`
  text-align: center;
  font-style: italic;
`;

const Icon = styled.img`
  height: 36px;
  margin-left: 8px;
  margin-right: 8px;
`;

const Stack = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-type: x mandatory;
`;
