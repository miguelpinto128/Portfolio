import React, { useContext } from "react";
import PageContext from "../../../../context/page/pageContext";
import VisibilitySensor from "react-visibility-sensor";
import { Box, MainContainer } from "../../../../styles/basicStyles";
import {
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  SkillWrapper,
  SkillsContainer,
  SkillsPageWrapper,
} from "./styles";
import Icon from "../../../../components/Icon";
import { colors } from "../../../../styles/colors";
import { Fade, FadeProps } from "react-awesome-reveal";
import Typography from "../../../../components/typography";

interface SkillsProps extends FadeProps {
  id: number;
  title: string;
  icon: string;
}

const skills: SkillsProps[] = [
  {
    id: 1,
    title: "Next.js",
    direction: "left",
    icon: "nextjs",
  },
  {
    id: 2,
    title: "React",
    direction: "right",
    icon: "react",
  },
  {
    id: 3,
    title: "React Native",
    direction: "left",
    icon: "react",
  },
  {
    id: 4,
    title: "HTML",
    direction: "right",
    icon: "html",
  },
  {
    id: 5,
    title: "CSS",
    direction: "left",
    icon: "css",
  },
  {
    id: 6,
    title: "Git",
    direction: "right",
    icon: "git",
  },
  {
    id: 7,
    title: "JavaScript",
    direction: "left",
    icon: "js",
  },
  {
    id: 8,
    title: "TypeScript",
    direction: "right",
    icon: "ts",
  },
  {
    id: 9,
    title: "Styled Components",
    direction: "left",
    icon: "styledComponents",
  },
  {
    id: 10,
    title: "Postman",
    direction: "right",
    icon: "postman",
  },
  {
    id: 10,
    title: "Swagger",
    direction: "left",
    icon: "swagger",
  },
];

const Skills = () => {
  const { setPage } = useContext(PageContext);

  const checkState = (isVisible: boolean) => {
    if (isVisible) setPage("Skills");
  };

  return (
    <SkillsPageWrapper
      fAlign={{ md: "flex-start", xxs: "flex-start" }}
      fJustify="center"
    >
      <VisibilitySensor onChange={checkState} delayedCall partialVisibility>
        <MainContainer>
          <Box position="relative">
            <Circle1 />
            <Circle2 />
            <Circle3 />
          </Box>
          <Box fJustify="center" fDirection="column" fAlign="center">
            <Fade direction="down">
              <Typography
                fSize={{ md: 4.688, xxs: 2 }}
                fWeight={700}
                color={colors.white}
                tAlign="flex-start"
                mb={2}
              >
                Skills
              </Typography>
            </Fade>
            <Fade direction="up">
              <Typography
                fSize={{ md: 1.125, xxs: 1.125 }}
                fWeight={400}
                color={colors.gunSmoke}
                tAlign="flex-start"
                mb={2}
              >
                Technologies I work with
              </Typography>
            </Fade>
          </Box>
          <SkillsContainer>
            {skills.map((skill, index) => (
              <Fade key={index} direction={skill.direction}>
                <SkillWrapper>
                  <Box h={15} fJustify="center" fAlign="center">
                    <Icon
                      color={colors.pinkRed}
                      size={10}
                      pr={0.563}
                      icon={skill.icon}
                    />
                  </Box>
                  <Typography
                    fSize={{ md: 2, xxs: 2 }}
                    fWeight={300}
                    color={colors.gunSmoke}
                    tAlign="flex-start"
                  >
                    {skill.title}
                  </Typography>
                </SkillWrapper>
              </Fade>
            ))}
          </SkillsContainer>
        </MainContainer>
      </VisibilitySensor>
    </SkillsPageWrapper>
  );
};

export default Skills;
