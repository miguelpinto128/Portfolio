import React, { useContext, useState } from "react";
import About from "./Components/About";
import Landing from "./Components/Landing";
import { Element, scroller } from "react-scroll";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import { Block, Box } from "../../styles/basicStyles";
import Icon from "../../components/Icon";
import { ScrollTopWrapper } from "./styles";
import PageContext from "../../context/page/pageContext";
import { colors } from "../../styles/colors";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

const Homepage = () => {
  const { page } = useContext(PageContext);

  return (
    <Block position="relative">
      <Element name="Home" className="Home" />
      <Landing />
      <Element name="About me" className="About me" />
      <About />
      <Element name="Skills" className="Skills" />
      <Skills />
      <Element name="Education" className="Education" />
      <Education />
      <Element name="Work Experience" className="Work Experience" />
      <Experience />
      {/* <Element name="Projects" className="Projects" />
      <Projects /> */}
      <ScrollTopWrapper
        display={{ md: "flex", xxs: "none" }}
        isActive={page === "Home" ? false : true}
        onClick={() => scroller.scrollTo("Home", { offset: 0 })}
      >
        <Box fJustify="center" fAlign="center">
          <Icon color={colors.white} size={1.5} icon="arrowUp" />
        </Box>
      </ScrollTopWrapper>
    </Block>
  );
};

export default Homepage;
