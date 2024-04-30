
import styled from 'styled-components';
import { Box, transitionsDelay } from '../../../../styles/basicStyles';

export const MainIconWrapper = styled(Box)`
  transition: all ${transitionsDelay} linear;
  height: 4.375rem;
  width: 4.375rem;
  border-radius: 50%;
  border: 0.125rem solid;
  border-color: ${({ theme }) => theme.colors.pinkRed};
  justify-content: center;
  align-items: center;

  & div, svg, path {
    transition: all ${transitionsDelay} linear;
    fill: ${({ theme }) => theme.colors.pinkRed};
  }

  &:hover {
    transition: all ${transitionsDelay} linear;
    border-color: ${({ theme }) => theme.colors.white};

    & div, svg, path {
      transition: all ${transitionsDelay} linear;
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SecondaryIconWrapper = styled(Box)`
  transition: all ${transitionsDelay} linear;
  height: 2.188rem;
  width: 2.188rem;
  border-radius: 50%;
  border: 0.125rem solid;
  border-color: ${({ theme }) => theme.colors.pinkRed};
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all ${transitionsDelay} linear;
    border-color: ${({ theme }) => theme.colors.white};

    & div {
      transition: all ${transitionsDelay} linear;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SecondaryIconDot = styled(Box)`
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.colors.pinkRed};
  background-color: ${({ theme }) => theme.colors.pinkRed};
  transition: all ${transitionsDelay} linear;
`;

export const FinalIcon = styled(Box)`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.pinkRed};
  transition: all ${transitionsDelay} linear;

  &:hover {
    transition: all ${transitionsDelay} linear;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Line = styled(Box)`
  width: 0.25rem;
  min-height: 8rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.pinkRed};
`;