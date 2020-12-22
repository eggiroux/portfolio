import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import { projectsData } from "../../Data/projects";

import { Project } from "./Project";

export const Projects = () => {
  return (
    <Wrapper id={"projects"}>
      <Header>Projects</Header>
      <ProjectList>
        {projectsData.map((project, index) => {
          return (
            <Project
              key={`${project.name}-${index}`}
              name={project.name}
              imageSrc={project.imageSrc}
              description={project.description}
              url={project.url}
              stack={project.stack}
            />
          );
        })}
      </ProjectList>
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
const ProjectList = styled.ul`
  display: flex;
  justify-content: start;
  overflow: scroll;
  scroll-snap-type: x mandatory;
`;
