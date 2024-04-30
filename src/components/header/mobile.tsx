import { FC, useContext, useEffect } from "react";
import { Block, Box, Image } from "../../styles/basicStyles";
import {
  MobileWrapper,
  MobileLink,
  MobileContent,
  Circle1,
  Circle2,
  Circle3,
} from "./styles";
import { items } from "./items";
import { colors } from "../../styles/colors";
import Typography from "../typography";
import PageContext from "../../context/page/pageContext";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { scroller } from "react-scroll";

interface Props {
  toggleLanguage: (value: string) => void;
  mobileMenu: boolean;
  toggleMenu: () => void;
  screenHeight: number;
}

export const Mobile: FC<Props> = ({
  toggleLanguage,
  mobileMenu,
  toggleMenu,
  screenHeight,
}) => {
  const { page, setPage } = useContext(PageContext);
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    if (mobileMenu) toggleMenu();
  }, []);

  return (
    <Box fJustify="flex-end" display={{ md: "none", xxs: "flex" }}>
      <Burger
        opened={opened}
        onClick={() => {
          toggle();
          toggleMenu();
        }}
        color={colors.white}
      />
      <Circle2 />
      <MobileWrapper open={mobileMenu} screenHeight={screenHeight}>
        <Block w="100%" position="relative">
          <Circle1 />
          <Circle2 />
          <Circle3 />
          <Block w="100%" padding="0 1.563rem">
            <Box
              h={5}
              fAlign="center"
              fJustify="space-between"
              bgColor={colors.rangoonGreen}
            >
              <Image
                src="/assets/logo.png"
                alt="logo"
                maxW={3.75}
                mt={-0.4}
                cursor="pointer"
                onClick={() => scroller.scrollTo("About me", { offset: 0 })}
              />
              <Burger
                opened={opened}
                onClick={() => {
                  toggle();
                  toggleMenu();
                }}
                color={colors.white}
              />
            </Box>
            <MobileContent
              fDirection="column"
              fJustify="space-between"
              screenHeight={screenHeight}
            >
              <Box fDirection="column" fAlign="center">
                {items.map((elem: string, index: number) => (
                  <MobileLink
                    key={index}
                    isActive={elem === page}
                    onClick={() => {
                      setPage(elem);
                      scroller.scrollTo(elem, { offset: 0 });
                      toggleMenu();
                      toggle();
                    }}
                  >
                    <Typography variant="mobile-link">{elem}</Typography>
                  </MobileLink>
                ))}
              </Box>
            </MobileContent>
          </Block>
        </Block>
      </MobileWrapper>
    </Box>
  );
};

export default Mobile;
