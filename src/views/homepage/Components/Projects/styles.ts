import styled from 'styled-components';
import { Box, Image, transitionsDelay } from '../../../../styles/basicStyles';

export const ProjectWrapper = styled(Box)`
  max-width: 24.375rem;
  max-height: 37.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all ${transitionsDelay} linear;

  &:before {
    position: absolute;
    content: '';
    border-radius: 0.625rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(246,0,76,1) 0%, rgba(0,0,0,1) 100%);
    z-index: -1;
    transition: opacity ${transitionsDelay} linear;
    opacity: 0;
  }


  &:hover {
    transform: scale(1.05);
    top: -5px;

    &:before {
      opacity: 0.85;
    }
  }


`;

export const ImageWrapper = styled(Image)`
  object-fit: contain;
`;
