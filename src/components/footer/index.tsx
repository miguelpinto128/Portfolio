import React, { useContext } from "react";
import { FooterWrapper } from "./styles";
import { Box, Image } from "../../styles/basicStyles";
import { SocialWrapper } from "../../views/homepage/Components/About/styles";
import Icon from "../Icon";
import { Bounce } from "react-awesome-reveal";
import { ImageWrapper } from "../header/styles";
import Typography from "../typography";
import { colors } from "../../styles/colors";
import PageContext from "../../context/page/pageContext";
import { scroller } from "react-scroll";

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

const Footer = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <FooterWrapper>
      <Box w="33.333%" fAlign="center" fJustify="center" mb={{ lg: 0, xxs: 1 }}>
        <Bounce>
          <ImageWrapper
            onClick={() => {
              setPage("Home");
              scroller.scrollTo("Home", { offset: 0 });
            }}
          >
            <Image
              src="/assets/logo.png"
              alt="logo"
              maxW={2}
              cursor="pointer"
            />
          </ImageWrapper>
        </Bounce>
      </Box>
      <Box
        fAlign="center"
        fJustify="center"
        gap={1}
        w="33.333%"
        mb={{ lg: 0, xxs: 1 }}
      >
        <Bounce>
          {Socials.map((social, index) => (
            <SocialWrapper key={index} href={social.url} target="_blank">
              <Icon
                color="rgba(198, 201, 216, .75)"
                size={1.2}
                icon={social.icon}
              />
            </SocialWrapper>
          ))}
        </Bounce>
      </Box>
      <Box w={{ lg: "33.333%", xxs: "100%" }} fJustify="center" fAlign="center">
        <Bounce style={{ textAlign: "center" }}>
          <Typography
            fSize={1}
            fWeight={400}
            color={colors.gunSmoke}
            tAlign="center"
          >
            Designed and Developed by Miguel Pinto
          </Typography>
        </Bounce>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
