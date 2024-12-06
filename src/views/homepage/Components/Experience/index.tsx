import React, { useContext } from "react";
import PageContext from "../../../../context/page/pageContext";
import { Circle1, Circle2, Circle3, SkillsPageWrapper } from "../Skills/styles";
import { Box, MainContainer } from "../../../../styles/basicStyles";
import VisibilitySensor from "react-visibility-sensor";
import { Fade, Bounce } from "react-awesome-reveal";
import Typography from "../../../../components/typography";
import { colors } from "../../../../styles/colors";
import {
  FinalIcon,
  Line,
  MainIconWrapper,
  SecondaryIconDot,
  SecondaryIconWrapper,
} from "../Education/styles";
import Icon from "../../../../components/Icon";

const Experience = () => {
  const { setPage } = useContext(PageContext);

  const checkState = (isVisible: boolean) => {
    if (isVisible) setPage("Work Experience");
  };

  return (
    <SkillsPageWrapper
      fAlign={{ md: "flex-start", xxs: "flex-start" }}
      fJustify="center"
      pb={5}
    >
      <VisibilitySensor onChange={checkState} delayedCall partialVisibility>
        <MainContainer>
          <Box position="relative">
            <Circle1 />
            <Circle2 />
            <Circle3 />
          </Box>
          <Box
            fJustify="center"
            fDirection="column"
            fAlign="center"
            zIndex={99}
          >
            <Fade direction="down">
              <Typography
                fSize={{ md: 4.688, xxs: 2 }}
                fWeight={700}
                color={colors.white}
                tAlign="flex-start"
                mb={2}
              >
                Work Experience
              </Typography>
            </Fade>
            {/* DESKTOP */}
            <Box
              fJustify="center"
              fAlign="center"
              mt={2}
              fDirection="column"
              display={{ md: "flex", xxs: "none" }}
            >
              <Bounce>
                <MainIconWrapper>
                  <Icon color={colors.pinkRed} size={2.5} icon="job" />
                </MainIconWrapper>
              </Bounce>
              <Box fDirection="row" fJustify="center" fAlign="center" h="100%">
                <Box
                  fJustify="center"
                  fAlign="flex-end"
                  w="40%"
                  fDirection="column"
                >
                  <Fade direction="left">
                    <Typography
                      fSize={{ md: 2, xxs: 2 }}
                      fWeight={300}
                      color={colors.white}
                    >
                      ItSector
                    </Typography>
                    <Typography
                      fSize={{ md: 2, xxs: 2 }}
                      fWeight={50}
                      color={colors.white}
                    >
                      Front End Developer
                    </Typography>
                  </Fade>
                </Box>
                <Box
                  fJustify="center"
                  fAlign="center"
                  w="10%"
                  h="100%"
                  fDirection="column"
                >
                  <Fade direction="up">
                    <Box fJustify="center" fAlign="center" fDirection="column">
                      <Line />
                      <SecondaryIconWrapper>
                        <SecondaryIconDot />
                      </SecondaryIconWrapper>
                      <Line />
                    </Box>
                  </Fade>
                </Box>
                <Box
                  fJustify="center"
                  fAlign="flex-start"
                  w="40%"
                  fDirection="column"
                >
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography
                        fSize={{ md: 2, xxs: 2 }}
                        fWeight={50}
                        color={colors.white}
                      >
                        2024 - Current
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
              <Box fDirection="row" fJustify="center" fAlign="center" h="100%">
                <Box
                  fJustify="center"
                  fAlign="flex-end"
                  w="40%"
                  fDirection="column"
                >
                  <Fade direction="left">
                    <Typography
                      fSize={{ md: 2, xxs: 2 }}
                      fWeight={300}
                      color={colors.white}
                    >
                      Codepoint
                    </Typography>
                    <Typography
                      fSize={{ md: 2, xxs: 2 }}
                      fWeight={50}
                      color={colors.white}
                    >
                      Front End Developer
                    </Typography>
                  </Fade>
                </Box>
                <Box
                  fJustify="center"
                  fAlign="center"
                  w="10%"
                  h="100%"
                  fDirection="column"
                >
                  <Fade direction="up">
                    <Box fJustify="center" fAlign="center" fDirection="column">
                      <Line />
                      <SecondaryIconWrapper>
                        <SecondaryIconDot />
                      </SecondaryIconWrapper>
                      <Line />
                    </Box>
                  </Fade>
                </Box>
                <Box
                  fJustify="center"
                  fAlign="flex-start"
                  w="40%"
                  fDirection="column"
                >
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography
                        fSize={{ md: 2, xxs: 2 }}
                        fWeight={50}
                        color={colors.white}
                      >
                        2022 - 2024
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
              <Box fDirection="row" fJustify="center" fAlign="center" h="100%">
                <Box
                  fJustify="center"
                  fAlign="flex-end"
                  w="40%"
                  fDirection="column"
                >
                  <Fade direction="left">
                    <Typography
                      fSize={{ md: 2, xxs: 2 }}
                      fWeight={300}
                      color={colors.white}
                    >
                      School Internship
                    </Typography>
                    <Typography
                      fSize={{ md: 2, xxs: 2 }}
                      fWeight={50}
                      color={colors.white}
                    >
                      Front End Developer
                    </Typography>
                  </Fade>
                </Box>
                <Box
                  fJustify="center"
                  fAlign="center"
                  w="10%"
                  h="100%"
                  fDirection="column"
                >
                  <Fade direction="down">
                    <Box fJustify="center" fAlign="center" fDirection="column">
                      <Line />
                      <SecondaryIconWrapper>
                        <SecondaryIconDot />
                      </SecondaryIconWrapper>
                      <Line />
                      <FinalIcon />
                    </Box>
                  </Fade>
                </Box>
                <Box
                  fJustify="center"
                  fAlign="flex-start"
                  w="40%"
                  fDirection="column"
                >
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography
                        fSize={{ md: 2, xxs: 2 }}
                        fWeight={50}
                        color={colors.white}
                      >
                        2019
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
            </Box>
            {/* MOBILE */}
            <Box
              mt={2}
              fDirection="column"
              display={{ md: "none", xxs: "flex" }}
            >
              <Box fDirection="row" fJustify="center" fAlign="center" h="100%">
                {/* 1 */}
                <Box
                  fJustify="center"
                  fAlign="center"
                  maxW={4.375}
                  fDirection="column"
                  mr={0.5}
                >
                  <Fade direction="up">
                    <Box fJustify="center" fAlign="center" fDirection="column">
                      <MainIconWrapper>
                        <Icon color={colors.pinkRed} size={2.5} icon="job" />
                      </MainIconWrapper>
                      <Line />
                      <SecondaryIconWrapper>
                        <SecondaryIconDot />
                      </SecondaryIconWrapper>
                      <Line />
                    </Box>
                  </Fade>
                </Box>
                {/* 2 */}
                <Box
                  w="80%"
                  fJustify="center"
                  fAlign="flex-start"
                  fDirection="column"
                  mt={2.5}
                >
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography
                        fSize={1.5}
                        fWeight={400}
                        color={colors.white}
                        mb={1}
                      >
                        ItSector
                      </Typography>
                      <Typography fSize={1.2} fWeight={50} color={colors.white}>
                        Front End Developer
                      </Typography>
                    </Box>
                  </Fade>
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography fSize={1.2} fWeight={50} color={colors.white}>
                        2024 - Current
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
              <Box fDirection="row" fJustify="center" fAlign="center" h="100%">
                {/* 1 */}
                <Box
                  fJustify="center"
                  fAlign="center"
                  maxW={4.375}
                  fDirection="column"
                  mr={0.5}
                >
                  <Fade direction="up">
                    <Box fJustify="center" fAlign="center" fDirection="column">
                      <Line />
                      <SecondaryIconWrapper>
                        <SecondaryIconDot />
                      </SecondaryIconWrapper>
                      <Line />
                    </Box>
                  </Fade>
                </Box>
                {/* 2 */}
                <Box
                  w="80%"
                  fJustify="center"
                  fAlign="flex-start"
                  fDirection="column"
                  mt={2.5}
                >
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography
                        fSize={1.5}
                        fWeight={400}
                        color={colors.white}
                        mb={1}
                      >
                        Codepoint
                      </Typography>
                      <Typography fSize={1.2} fWeight={50} color={colors.white}>
                        Front End Developer
                      </Typography>
                    </Box>
                  </Fade>
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography fSize={1.2} fWeight={50} color={colors.white}>
                        2022 - 2024
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
              <Box fDirection="row" fJustify="center" fAlign="center" h="100%">
                {/* 1 */}
                <Box
                  fJustify="center"
                  fAlign="center"
                  maxW={4.375}
                  fDirection="column"
                  mr={0.5}
                >
                  <Fade direction="down">
                    <Box fJustify="center" fAlign="center" fDirection="column">
                      <Line />
                      <SecondaryIconWrapper>
                        <SecondaryIconDot />
                      </SecondaryIconWrapper>
                      <Line />
                      <FinalIcon />
                    </Box>
                  </Fade>
                </Box>
                {/* 2 */}
                <Box
                  w="80%"
                  fJustify="center"
                  fAlign="flex-start"
                  fDirection="column"
                >
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography
                        fSize={1.5}
                        fWeight={400}
                        color={colors.white}
                        mb={1}
                      >
                        School Internship
                      </Typography>
                      <Typography fSize={1.2} fWeight={50} color={colors.white}>
                        Front End Developer
                      </Typography>
                    </Box>
                  </Fade>
                  <Fade direction="right">
                    <Box fDirection="column">
                      <Typography fSize={1.2} fWeight={50} color={colors.white}>
                        2019
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
            </Box>
          </Box>
        </MainContainer>
      </VisibilitySensor>
    </SkillsPageWrapper>
  );
};

export default Experience;
