import React from "react";
import { Box, MainContainer } from "../../../../styles/basicStyles";
import {
  AboutContainer,
  AboutPageWrapper,
  Circle1,
  Circle2,
  Circle3,
  ContentWrapper,
  ImageContainer,
  ImageWrapper,
  Tab,
  Tabs,
} from "./styles";
import Typography from "../../../../components/typography";
import { colors } from "../../../../styles/colors";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <AboutPageWrapper fAlign={{ md: "center", xxs: "flex-start" }}>
      <MainContainer>
        <ContentWrapper
          position="relative"
          fDirection={{ md: "row", xxs: "column" }}
          fAlign={{ md: "flex-start", xxs: "center" }}
        >
          <div>
            <Circle1 />
            <Circle2 />
            <Circle3 />
          </div>

          <ImageContainer>
            <Fade direction="left">
              <ImageWrapper src="/assets/my_image.jpg" />
            </Fade>
          </ImageContainer>
          <AboutContainer>
            <Typography
              fSize={{ md: 4.688, xxs: 2 }}
              fWeight={700}
              color={colors.white}
              tAlign="flex-start"
              mb={2}
            >
              About me
            </Typography>
            <Box fDirection="column" maxW={{ md: "50%", xxs: "100%" }}>
              <Fade direction="right">
                <Typography
                  fSize={0.938}
                  fWeight={500}
                  color="grey"
                  letterSpaccing={0.05}
                  mb={1.25}
                >
                  My name is Miguel Pinto. <br />
                  I'm from Braga, Portugal.
                  <br />
                  I'm a software developer, specializing in building exceptional
                  website, applications and everything in between.
                </Typography>
              </Fade>
            </Box>
            <Tabs>
              <Tab>asdsa</Tab>
            </Tabs>
          </AboutContainer>
        </ContentWrapper>
      </MainContainer>
    </AboutPageWrapper>
  );
};

export default About;
