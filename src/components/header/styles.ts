import { Block, Box, transitionsDelay } from '../../styles/basicStyles';
import { breakpoints, breakpointsVertical } from '../../styles/breakpoints';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ color?: string, isBlack: boolean}>`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme, isBlack }) => isBlack ? theme.colors.rangoonGreen : 'transparent'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: background-color ${transitionsDelay} linear;
  
  &.fixed {
    background-color: ${({ theme, color }) => color ? color: theme.colors.black};
  }
`;

/************************************* PROGRESS BAR *************************************/

export const ProgressBarWrapper = styled.div`
  height: 0.125rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

/************************************* DESKTOP *************************************/

export const ImageWrapper = styled.div`
  transition: transform ${transitionsDelay} linear;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkComponent = styled.div<{ textColor?: string, hoverColor?: string, hoverDotColor?: string, isActive?: boolean }>`
  position: relative;
  cursor: pointer;
  padding: 0 1.563rem;
  position: relative;
  top: 0;
  transition: top ease 0.5s;

  & span {
    color: ${({ textColor, theme }) => textColor ? textColor: theme.colors.white};
    transition: font-weight ${transitionsDelay} linear, color ${transitionsDelay} linear;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    transform: translateX(-50%);
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: ${({ hoverDotColor, theme }) => hoverDotColor ? hoverDotColor :  theme.colors.pinkRed};
    visibility: hidden;
    opacity: 0;
    transition: visibility ${transitionsDelay} linear, opacity ${transitionsDelay} linear;
  }

  &:hover {
    & span {
      color: ${({ hoverColor, theme }) => hoverColor ? hoverColor :  theme.colors.white};
    }

    &:after {
      visibility: visible;
      opacity: 1;
    }
    
    top: -5px;
  }

  ${({ isActive, theme }) => isActive &&
    css`
      & span {
        color: ${isActive ? theme.colors.pinkRed :  theme.colors.white};
      }
    `
  }

  @media ${breakpoints.lg} {
    padding: 0 0.75rem;
  }
`;

export const LanguageSelectedWrapper = styled(Block)<{blackHover: boolean}>`
  & span {
    transition: color ${transitionsDelay} linear;
  }

  & svg path[fill] {
    transition: fill ${transitionsDelay} linear;
  }

  & svg path[stroke] {
    transition: stroke ${transitionsDelay} linear;
  }

  &:hover {
    & span {
      color: ${({ theme, blackHover }) => blackHover ? theme.colors.chineseBlack : theme.colors.white} !important;
    }

    & svg path[fill] {
      fill: ${({ theme, blackHover }) => blackHover ? theme.colors.chineseBlack : theme.colors.white} !important;
    }

    & svg path[stroke] {
      stroke: ${({ theme, blackHover }) => blackHover ? theme.colors.chineseBlack : theme.colors.white} !important;
    }
  }
`;

export const LanguageWrapper = styled(Block)`
  & span {
    transition: color ${transitionsDelay} linear;
  }

  &:hover {
    & span {
      color: ${({ theme }) => theme.colors.white} !important;
    }
  }
`;

/************************************* MOBILE *************************************/

export const MobileWrapper = styled.div<{ open: boolean; screenHeight: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // 100vh does not work well in IOS, so we need to calculate the current screen height and use it here
  height: ${({ open, screenHeight }) => open ? `${screenHeight}px` : 0};
  transition: height 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.rangoonGreen};
  overflow: hidden;
  z-index: 999999;
`;

export const MobileContent = styled(Box)<{ screenHeight: number }>`
  height: ${({ screenHeight }) => `calc(${screenHeight}px - 7rem)`};
  padding-top: 4.375rem;
  padding-bottom: 3.125rem;
  z-index: 2;
  position: relative;

  @media ${breakpointsVertical.sm} {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }
`;

export const MobileLink = styled.div<{isActive?: boolean }>`
  padding: 0.938rem 0;

  & span {
    color: ${({ theme }) => theme.colors.white};
    transition: color ${transitionsDelay} linear;
  }

  &:hover {
    & span {
      color: ${({ theme }) => theme.colors.pinkRed};
      cursor: pointer;
    }
  }

  ${({ isActive, theme }) => isActive &&
    css`
      & span {
        transition: font-size ${transitionsDelay} linear;
        font-size: 20px;
        color: ${isActive ? theme.colors.pinkRed :  theme.colors.white};
      }
    `
  }

  @media ${breakpointsVertical.sm} {
    padding: 0.5rem 0;

    & span {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const Circle1 = styled.div`
  position: absolute;
  top: 6rem;
  right: -2.75rem;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(100, 255, 227, 0.80) 0%, rgba(100, 255, 227, 0.80) 100%);
  filter: blur(4.688rem);
  z-index: 1;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const Circle2 = styled.div`
  position: absolute;
  top: 16.438rem;
  left: -8rem;
  width: 10.625rem;
  height: 10.625rem;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(129, 108, 255, 0.60) 0%, rgba(129, 108, 255, 0.60) 100%);
  filter: blur(4.688rem);
  z-index: 1;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const Circle3 = styled.div`
  position: absolute;
  top: 24.75rem;
  left: 1.25rem;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(100, 255, 227, 0.80) 0%, rgba(100, 255, 227, 0.80) 100%);
  filter: blur(5.688rem);
  z-index: 1;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;
