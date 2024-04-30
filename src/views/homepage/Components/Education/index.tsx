import {
  AboutPageWrapper,
  Circle1,
  Circle2,
  Circle3,
  ContentWrapper,
} from "../About/styles";
import { Block, Box, MainContainer } from "../../../../styles/basicStyles";
import PageContext from "../../../../context/page/pageContext";
import VisibilitySensor from "react-visibility-sensor";
import { Fade, Bounce } from "react-awesome-reveal";
import Typography from "../../../../components/typography";
import { colors } from "../../../../styles/colors";
import { useContext } from "react";
import {
  FinalIcon,
  Line,
  MainIconWrapper,
  SecondaryIconDot,
  SecondaryIconWrapper,
} from "./styles";
import Icon from "../../../../components/Icon";

const Education = () => {
  const { setPage } = useContext(PageContext);

  const checkState = (isVisible: boolean) => {
    if (isVisible) setPage("Education");
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
                  Education
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
                    <Icon color={colors.pinkRed} size={2.5} icon="school" />
                  </MainIconWrapper>
                </Bounce>
                <Box
                  fDirection="row"
                  fJustify="center"
                  fAlign="center"
                  h="100%"
                >
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
                        Web Development & Multimedia
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
                      <Box
                        fJustify="center"
                        fAlign="center"
                        fDirection="column"
                      >
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
                          2020 - 2022
                        </Typography>
                        <Typography
                          fSize={{ md: 2, xxs: 2 }}
                          fWeight={50}
                          color={colors.white}
                        >
                          IPCA
                        </Typography>
                      </Box>
                    </Fade>
                  </Box>
                </Box>
                <Box
                  fDirection="row"
                  fJustify="center"
                  fAlign="center"
                  h="100%"
                >
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
                        Computer Systems Management & Programming Technician
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
                      <Box
                        fJustify="center"
                        fAlign="center"
                        fDirection="column"
                      >
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
                          2017 - 2019
                        </Typography>
                        <Typography
                          fSize={{ md: 2, xxs: 2 }}
                          fWeight={50}
                          color={colors.white}
                        >
                          Camilo Castelo Branco
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
                <Box
                  fDirection="row"
                  fJustify="center"
                  fAlign="center"
                  h="100%"
                >
                  {/* 1 */}
                  <Box
                    fJustify="center"
                    fAlign="center"
                    maxW={4.375}
                    fDirection="column"
                    mr={0.5}
                  >
                    <Fade direction="up">
                      <Box
                        fJustify="center"
                        fAlign="center"
                        fDirection="column"
                      >
                        <MainIconWrapper>
                          <Icon
                            color={colors.pinkRed}
                            size={2.5}
                            icon="school"
                          />
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
                          Web Development & Multimedia
                        </Typography>
                      </Box>
                    </Fade>
                    <Fade direction="right">
                      <Box fDirection="column">
                        <Typography
                          fSize={1.2}
                          fWeight={50}
                          color={colors.white}
                        >
                          2020 - 2022
                        </Typography>
                        <Typography
                          fSize={1.2}
                          fWeight={50}
                          color={colors.white}
                        >
                          IPCA
                        </Typography>
                      </Box>
                    </Fade>
                  </Box>
                </Box>
                <Box
                  fDirection="row"
                  fJustify="center"
                  fAlign="center"
                  h="100%"
                >
                  {/* 1 */}
                  <Box
                    fJustify="center"
                    fAlign="center"
                    fDirection="column"
                    mr={0.5}
                    maxW={4.375}
                  >
                    <Fade direction="down">
                      <Box
                        fJustify="center"
                        fAlign="center"
                        fDirection="column"
                      >
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
                          Computer Systems Management & Programming Technician
                        </Typography>
                      </Box>
                    </Fade>
                    <Fade direction="right">
                      <Box fDirection="column">
                        <Typography
                          fSize={1.2}
                          fWeight={50}
                          color={colors.white}
                        >
                          2017 - 2019
                        </Typography>
                        <Typography
                          fSize={1.2}
                          fWeight={50}
                          color={colors.white}
                        >
                          Camilo Castelo Branco
                        </Typography>
                      </Box>
                    </Fade>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ContentWrapper>
        </MainContainer>
      </VisibilitySensor>
    </AboutPageWrapper>
  );
};

export default Education;
