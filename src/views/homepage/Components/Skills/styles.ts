
import styled, { css } from 'styled-components';
import { Box, Image } from '../../../../styles/basicStyles';
import { breakpoints } from '../../../../styles/breakpoints';

export const transitionsDelay = '0.2s';

export const SkillsPageWrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black} !important;
  padding-top: 5rem;
`;

export const Circle1 = styled.div`
  position: absolute;
  top: -15rem;
  right: -15rem;
  width: 16.25rem;
  height: 16.25rem;
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
  top: 10rem;
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
  top: 2rem;
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
  bottom: 10rem;
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

export const Circle5 = styled.div`
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

export const SkillsContainer = styled(Box)`
  flex-wrap: wrap;
  gap: 3.125rem;
  z-index: 999;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

`;

export const SkillWrapper = styled(Box)`
  background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(34,34,34,1) 100%);
  width: 22rem;
  height: 22rem;
  border-radius: 0.625rem;
  transition: all ${transitionsDelay} linear;
  position: relative;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakpoints.sm} {
    background: linear-gradient(180deg, rgba(31,81,255,1) 17%, rgba(7,17,140,1) 80%);
    & div, svg, path {
      transition: fill ${transitionsDelay} linear;
      fill: ${({ theme }) => theme.colors.white} !important;
    } 

    & div, span {
      transition: color ${transitionsDelay} linear;
      color: white;
    }
  }

  & div, svg, path {
    transition: fill ${transitionsDelay} linear;
    fill: ${({ theme }) => theme.colors.pinkRed};
  } 

  &:before {
    position: absolute;
    content: '';
    border-radius: 0.625rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(31,81,255,1) 17%, rgba(7,17,140,1) 80%);
    z-index: -1;
    transition: opacity ${transitionsDelay} linear;
    opacity: 0;
  }

  &:hover {
    transform: scale(1);
    top: -5px;

    &:before {
      opacity: 1;
    }

    & div, span {
      transition: color ${transitionsDelay} linear;
      color: white;
    }

    & div, svg, path {
      transition: fill ${transitionsDelay} linear;
      fill: ${({ theme }) => theme.colors.white};
    } 
  }
`;
