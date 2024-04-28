import React from "react";
import { FooterWrapper } from "./styles";
import { Box, Image } from "../../styles/basicStyles";
import { SocialWrapper } from "../../views/homepage/Components/About/styles";
import Icon from "../Icon";
import { Bounce } from "react-awesome-reveal";
import { ImageWrapper } from "../header/styles";
import Typography from "../typography";
import { colors } from "../../styles/colors";

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
  return (
    <FooterWrapper>
      <Box w="33.333%">
        <Bounce>
          <ImageWrapper>
            <Image
              src="/assets/logo.png"
              alt="logo"
              maxW={3.75}
              cursor="pointer"
            />
          </ImageWrapper>
        </Bounce>
      </Box>
      <Box fAlign="center" fJustify="center" gap={1} w="33.333%">
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
      <Box w="33.333%" fJustify="flex-end">
        <Bounce>
          <Typography
            fSize={1}
            fWeight={400}
            color={colors.gunSmoke}
            tAlign="flex-end"
          >
            Designed and Developed by Miguel Pinto
          </Typography>
        </Bounce>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
