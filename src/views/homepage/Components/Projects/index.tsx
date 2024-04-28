import React, { useContext } from "react";
import PageContext from "../../../../context/page/pageContext";
import {
  AboutPageWrapper,
  Circle1,
  Circle2,
  Circle3,
  ContentWrapper,
} from "../About/styles";
import {
  Block,
  Box,
  Image,
  MainContainer,
} from "../../../../styles/basicStyles";
import { Fade } from "react-awesome-reveal";
import Typography from "../../../../components/typography";
import { colors } from "../../../../styles/colors";
import VisibilitySensor from "react-visibility-sensor";
import { ImageWrapper, ProjectWrapper } from "./styles";

interface ProjectsProps {
  id: number;
  image: string;
  url?: string;
}

const projects: ProjectsProps[] = [
  {
    id: 1,
    image: "/assets/portfolio.png",
    url: "",
  },
];

const Projects = () => {
  const { setPage } = useContext(PageContext);

  const checkState = (isVisible: boolean) => {
    if (isVisible) setPage("Projects");
  };

  return (
    <AboutPageWrapper
      pt={{ md: 8, xxs: 2 }}
      pb={5}
      fAlign={{ md: "flex-start", xxs: "flex-start" }}
      fJustify="center"
    >
      <VisibilitySensor onChange={checkState} delayedCall partialVisibility>
        <MainContainer>
          <ContentWrapper
            position="relative"
            fDirection={{ md: "row", xxs: "column" }}
            fAlign={{ md: "flex-start", xxs: "center" }}
          >
            <Block position="relative">
              <Circle1 />
              <Circle2 />
              <Circle3 />
            </Block>
            <Box
              fJustify="center"
              fDirection="column"
              fAlign="center"
              zIndex={9}
            >
              <Fade direction="down">
                <Typography
                  fSize={{ md: 4.688, xxs: 2 }}
                  fWeight={700}
                  color={colors.white}
                  tAlign="flex-start"
                  mb={2}
                >
                  Projects
                </Typography>
              </Fade>
              {projects.map((project, index) => (
                <ProjectWrapper key={index}>
                  <ImageWrapper maxW="100%" src={project.image} />
                </ProjectWrapper>
              ))}
            </Box>
          </ContentWrapper>
        </MainContainer>
      </VisibilitySensor>
    </AboutPageWrapper>
  );
};

export default Projects;
