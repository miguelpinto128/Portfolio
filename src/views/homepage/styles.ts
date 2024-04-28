import styled, { css } from 'styled-components';
import { Box, transitionsDelay } from '../../styles/basicStyles';

export const ScrollTopWrapper = styled(Box)<{isActive?: boolean}>`
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, rgba(246,27,16,1) 0%, rgba(239,9,99,1) 80%);
  width: auto;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition: opacity ${transitionsDelay} linear, transform ${transitionsDelay} linear;
  height: 2.875rem;
  width: 2.875rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;

  &:hover {
    transform: scale(1.2);
  }

`;
