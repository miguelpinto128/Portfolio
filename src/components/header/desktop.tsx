import { FC, useContext } from "react";
import { Box, Image } from "../../styles/basicStyles";
import {
  Circle1,
  Circle2,
  Circle3,
  ImageWrapper,
  LinkComponent,
} from "./styles";
import { items } from "./items";
import { colors } from "../../styles/colors";
import Typography from "../typography";
import PageContext from "../../context/page/pageContext";

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
          maxW={3.75}
          cursor="pointer"
          onClick={() => setPage("Home")}
        />
      </ImageWrapper>
      <Box
        fAlign="center"
        fJustify="flex-end"
        display={{ md: "flex", xxs: "none" }}
      >
        {/* <Circle1 />
        <Circle2 />
        <Circle3 /> */}
        {items.map((elem, index: number) => (
          <LinkComponent
            key={index}
            textColor={colors.white}
            hoverColor={colors.pinkRed}
            hoverDotColor={colors.pinkRed}
            isActive={elem === page}
            onClick={() => setPage(elem)}
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
