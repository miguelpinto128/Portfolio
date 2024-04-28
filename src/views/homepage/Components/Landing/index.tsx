import React, { useContext, useEffect, useRef, useState } from "react";
import {
  BannerCircle1,
  BannerCircle2,
  BannerCircle3,
  LandingPageWrapper,
  NameWrapper,
} from "./styles";
import Typewriter from "typewriter-effect";
import { MainContainer } from "../../../../styles/basicStyles";
import Typography from "../../../../components/typography";
import { colors } from "../../../../styles/colors";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";
import PageContext from "../../../../context/page/pageContext";

const Landing = () => {
  const [inside, _setInside] = useState(false);
  const [circle, _setCircle] = useState(".circle1");
  const { setPage } = useContext(PageContext);

  const circleRef = useRef(circle);
  const setCircle = (data: any) => {
    circleRef.current = data;
    _setCircle(data);
  };

  const insideRef = useRef(inside);
  const setInside = (data: any) => {
    insideRef.current = data;
    _setInside(data);
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", moveCircle);
      window.addEventListener("scroll", stickCircle);
      return () => {
        window.removeEventListener("mousemove", moveCircle);
        window.removeEventListener("scroll", stickCircle);
      };
    }
  }, [isMobile]);

  const moveCircle = (e: any) => {
    if (!isMobile && insideRef.current && circleRef.current) {
      const circleElem = document.querySelector(circleRef.current);

      gsap.to(circleElem, {
        duration: 7,
        left: e.clientX - 50,
        top: e.clientY - 150 + window.pageYOffset,
        ease: "elastic(1, 0.2)",
      });
    }
  };

  const stickCircle = (e: any) => {
    if (!isMobile && insideRef.current && circleRef.current) {
      const circleElem = document.querySelector(circleRef.current);

      gsap.set(circleElem, {
        left: e.pageX,
        top: e.pageY,
      });
    }
  };

  const checkState = (isVisible: boolean) => {
    if (isVisible) setPage("Home");
  };

  return (
    <LandingPageWrapper
      onMouseEnter={() => !isMobile && setInside(true)}
      onMouseLeave={() => !isMobile && setInside(false)}
      fJustify="center"
    >
      <VisibilitySensor onChange={checkState} delayedCall partialVisibility>
        <>
          <BannerCircle1
            onMouseEnter={() => !isMobile && setCircle(".circle1")}
            className="circle1"
          />
          <BannerCircle2
            onMouseEnter={() => !isMobile && setCircle(".circle2")}
            className="circle2"
          />
          <BannerCircle3
            onMouseEnter={() => !isMobile && setCircle(".circle3")}
            className="circle3"
          />
          <MainContainer>
            <NameWrapper>
              <Fade direction="down">
                <Typography
                  fSize={0.938}
                  fWeight={500}
                  color="grey"
                  letterSpaccing={0.25}
                  mb={1.25}
                >
                  WELCOME TO MY WORLD
                </Typography>
              </Fade>
              <Fade direction="up">
                <Typography
                  fSize={{ md: 4.688, xxs: 2 }}
                  fWeight={900}
                  color={colors.white}
                >
                  Hi, I’m Miguel Pinto.
                </Typography>
                <Typography
                  fSize={{ md: 4.688, xxs: 2 }}
                  fWeight={900}
                  color={colors.pinkRed}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "Mobile Developer",
                        "Software Developer",
                        "React Developer",
                        "React Native Developer",
                        "NextJs Developer",
                        "JS Developer",
                        "TS Developer",
                        "Gamer",
                        "Tech Enthusiast",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
              </Fade>
            </NameWrapper>
          </MainContainer>
        </>
      </VisibilitySensor>
    </LandingPageWrapper>
  );
};

export default Landing;
