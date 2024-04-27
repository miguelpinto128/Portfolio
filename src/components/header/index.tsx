import { FC, useEffect, useState } from "react";
import { Block, Box, MainContainer } from "../../styles/basicStyles";
import { Wrapper, ProgressBarWrapper } from "./styles";
import { useRouter } from "next/router";
import { colors } from "../../styles/colors";
import Desktop from "./desktop";
import Mobile from "./mobile";

interface Props {
  isBlack?: boolean;
}

export const Header: FC<Props> = ({ isBlack = false }) => {
  const [scrolled, setScrolled] = useState<string>("0%");
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    checkHeader();
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 100vh does not work well in IOS, so we need to calculate the current screen height
  const handleResize = () => setScreenHeight(window.innerHeight);

  const handleScroll = () => {
    checkHeader();
    setProgressBar();
  };

  const checkHeader = () => {
    const scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 50)
      document.getElementById("header")?.classList.add("fixed");
    else document.getElementById("header")?.classList.remove("fixed");
  };

  const setProgressBar = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrolled(`${(scrollPx / winHeightPx) * 100}%`);
  };

  const toggleLanguage = async (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  const toggleMenu = () => {
    if (mobileMenu) {
      // Add a timeout to only show the scroll bar after the menu closes
      setTimeout(() => {
        document.body.style.overflowY = "auto";
        document.body.style.position = "initial";
      }, 500);
    } else {
      document.body.style.overflowY = "scroll";
      document.body.style.position = "fixed";
    }

    setMobileMenu(!mobileMenu);
  };

  return (
    <Wrapper id="header" color={colors.rangoonGreen} isBlack={isBlack}>
      <ProgressBarWrapper>
        <Block h={0.125} bgColor={colors.pinkRed} w={scrolled} />
      </ProgressBarWrapper>
      <MainContainer>
        <Box w="100%" fAlign="center">
          <Desktop toggleLanguage={toggleLanguage} />
          <Mobile
            toggleLanguage={toggleLanguage}
            mobileMenu={mobileMenu}
            toggleMenu={toggleMenu}
            screenHeight={screenHeight}
          />
        </Box>
      </MainContainer>
    </Wrapper>
  );
};

export default Header;
