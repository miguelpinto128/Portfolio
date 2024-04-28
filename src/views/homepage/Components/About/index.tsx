import React, { useState } from "react";
import { Block, Box, MainContainer } from "../../../../styles/basicStyles";
import {
  AboutContainer,
  AboutPageWrapper,
  Circle1,
  Circle2,
  Circle3,
  ContentWrapper,
  EmailText,
  ImageContainer,
  ImageWrapper,
  SocialWrapper,
  Tab,
  Tabs,
} from "./styles";
import Typography from "../../../../components/typography";
import { colors } from "../../../../styles/colors";
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";
import { useContext } from "react";
import PageContext from "../../../../context/page/pageContext";
import Icon from "../../../../components/Icon";

interface SocialsProps {
  id: number;
  icon: string;
  url: string;
}

const Socials: SocialsProps[] = [
  {
    id: 1,
    icon: "facebook",
    url: "https://www.facebook.com/josepinto.migue/",
  },
  {
    id: 2,
    icon: "instagram",
    url: "https://www.instagram.com/miguel_pinto.128/",
  },
  {
    id: 3,
    icon: "linkedin",
    url: "https://www.linkedin.com/in/miguel-pinto-43b56a194/",
  },
  {
    id: 4,
    icon: "github",
    url: "https://github.com/miguelpinto128",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { setPage } = useContext(PageContext);

  const checkState = (isVisible: boolean) => {
    if (isVisible) setPage("About me");
  };

  return (
    <AboutPageWrapper
      fAlign={{ md: "center", xxs: "flex-start" }}
      pb={5}
      pt={{ md: 8, xxs: 2 }}
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
            <Box fDirection="column" fAlign="center" fJustify="center">
              <ImageContainer>
                <Zoom>
                  <ImageWrapper src="/assets/my_image.jpg" />
                </Zoom>
              </ImageContainer>
              <Box
                mt={{ md: 3, xxs: 2 }}
                fAlign="center"
                fJustify="center"
                gap={1}
              >
                <Bounce>
                  {Socials.map((social, index) => (
                    <SocialWrapper
                      key={index}
                      href={social.url}
                      target="_blank"
                    >
                      <Icon
                        color="rgba(198, 201, 216, .75)"
                        size={1.2}
                        icon={social.icon}
                      />
                    </SocialWrapper>
                  ))}
                </Bounce>
              </Box>
            </Box>
            <AboutContainer>
              <Slide direction="down">
                <Typography
                  fSize={{ md: 4.688, xxs: 2 }}
                  fWeight={700}
                  color={colors.white}
                  tAlign="flex-start"
                  mb={2}
                >
                  About me
                </Typography>
              </Slide>
              <Box fDirection="column" maxW={{ md: "70%", xxs: "100%" }}>
                <Fade direction="down">
                  <Tabs>
                    <Tab
                      isActive={activeTab === 1}
                      onClick={() => setActiveTab(1)}
                      mb={2}
                    >
                      About
                    </Tab>
                    <Tab
                      isActive={activeTab === 2}
                      onClick={() => setActiveTab(2)}
                      mb={2}
                    >
                      Basic Information
                    </Tab>
                  </Tabs>
                </Fade>
                {activeTab === 1 && (
                  <Slide direction="right">
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color="grey"
                        letterSpaccing={0.05}
                      >
                        My name is Miguel Pinto.
                      </Typography>
                    </Box>
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color="grey"
                        letterSpaccing={0.05}
                      >
                        I'm from Braga, Portugal.
                      </Typography>
                    </Box>
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color="grey"
                        letterSpaccing={0.05}
                      >
                        I'm a software developer, specializing in building
                        exceptional websites, applications and everything in
                        between.
                      </Typography>
                    </Box>
                  </Slide>
                )}
                {activeTab === 2 && (
                  <Slide direction="right">
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color={colors.silver}
                        letterSpaccing={0.05}
                      >
                        Date of Birth:
                      </Typography>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        letterSpaccing={0.05}
                        color={colors.gunSmoke}
                        ml={0.5}
                      >
                        March 16, 2001
                      </Typography>
                    </Box>
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color={colors.silver}
                        letterSpaccing={0.05}
                      >
                        Email:
                        <Typography
                          fSize={0.938}
                          fWeight={500}
                          color="grey"
                          letterSpaccing={0.05}
                          variant="link"
                          ml={0.5}
                        >
                          <EmailText href="mailto:miguelpinto128@gmail.com">
                            miguelpinto128@gmail.com
                          </EmailText>
                        </Typography>
                      </Typography>
                    </Box>
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color={colors.silver}
                        letterSpaccing={0.05}
                      >
                        Languages:
                        <Typography
                          fSize={0.938}
                          fWeight={500}
                          color="grey"
                          letterSpaccing={0.05}
                          variant="link"
                          ml={0.5}
                        >
                          Portuguese, English
                        </Typography>
                      </Typography>
                    </Box>
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color={colors.silver}
                        letterSpaccing={0.05}
                      >
                        Phone:
                        <Typography
                          fSize={0.938}
                          fWeight={500}
                          color="grey"
                          letterSpaccing={0.05}
                          variant="link"
                          ml={0.5}
                        >
                          <EmailText href="tel:+351916114962">
                            +351 916 114 962
                          </EmailText>
                        </Typography>
                      </Typography>
                    </Box>
                    <Box mb={0.5}>
                      <Typography
                        fSize={0.938}
                        fWeight={500}
                        color={colors.silver}
                        letterSpaccing={0.05}
                      >
                        Address:
                        <Typography
                          fSize={0.938}
                          fWeight={500}
                          color="grey"
                          letterSpaccing={0.05}
                          variant="link"
                          ml={0.5}
                        >
                          Barcelos, Braga, Portugal
                        </Typography>
                      </Typography>
                    </Box>
                  </Slide>
                )}
              </Box>
            </AboutContainer>
          </ContentWrapper>
        </MainContainer>
      </VisibilitySensor>
    </AboutPageWrapper>
  );
};

export default About;
