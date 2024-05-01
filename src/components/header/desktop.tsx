import { FC, useContext } from "react";
import { Box, Image } from "../../styles/basicStyles";
import { Circle2, ImageWrapper, LinkComponent } from "./styles";
import { items } from "./items";
import { colors } from "../../styles/colors";
import Typography from "../typography";
import PageContext from "../../context/page/pageContext";
import { scroller } from "react-scroll";

interface Props {
  toggleLanguage: (value: string) => void;
}

export const Desktop: FC<Props> = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <ImageWrapper>
        <Image
          src="/assets/logo.png"
          alt="logo"
          maxW={2}
          cursor="pointer"
          onClick={() => {
            setPage("Home");
            scroller.scrollTo("Home", { offset: 0 });
          }}
        />
      </ImageWrapper>
      <Box
        fAlign="center"
        fJustify="flex-end"
        display={{ md: "flex", xxs: "none" }}
      >
        <Circle2 />
        {items.map((elem, index: number) => (
          <LinkComponent
            key={index}
            textColor={colors.white}
            hoverColor={colors.pinkRed}
            hoverDotColor={colors.pinkRed}
            isActive={elem === page}
            onClick={() => {
              setPage(elem);
              scroller.scrollTo(elem, { offset: 0 });
            }}
          >
            <Typography
              fWeight={500}
              variant="header-link"
              style={{ userSelect: "none", textDecoration: "none" }}
            >
              {elem}
            </Typography>
          </LinkComponent>
        ))}
      </Box>
    </>
  );
};

export default Desktop;
