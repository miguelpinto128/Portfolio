
import styled, { css } from 'styled-components';
import { Box, Image, transitionsDelay } from '../../../../styles/basicStyles';
import { breakpoints } from '../../../../styles/breakpoints';

export const AboutPageWrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.rangoonGreen} !important;
`;

export const ContentWrapper = styled(Box)`
  gap: 50px;
`;

export const ImageContainer = styled(Box)`
  max-height: 40rem;
  max-width: 30rem;
`;

export const ImageWrapper = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background: linear-gradient(145deg, #3d928c, #49ada7);
  box-shadow:  9px 9px 17px #3d928c, -9px -9px 17px #242424;
`;


export const Circle1 = styled.div`
  position: absolute;
  top: 13rem;
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
  top: 0rem;
  right: 0rem;
  width: 15.625rem;
  height: 15.625rem;
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

export const Circle4 = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(129, 108, 255, 0.60) 0%, rgba(129, 108, 255, 0.60) 100%);
  filter: blur(4.688rem);
  z-index: 1;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const AboutContainer = styled(Box)`
  flex-direction: column;
`;

export const Tabs = styled(Box)`
  flex-direction: column;
`;

export const Tab = styled(Box)`
width: auto;
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
    bottom: -0.5rem;
    height: 0.25rem;
    width: 20%;
    margin-top: 0.25rem;
    transition: width ${transitionsDelay} linear;
    background-color: ${({ theme }) => theme.colors.pinkRed};
    border-radius: 0.1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grey};

    &:after {
      width: 100%;
    }

    & span {
      color: ${({ theme }) => theme.colors.purple};
    }
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