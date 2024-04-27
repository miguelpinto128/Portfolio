import { transitionsDelay } from '../../styles/basicStyles';
import { generateProps } from 'styled-gen';
import { setSize } from '../../utils/setSize/setSize';
import styled, { css } from 'styled-components';

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  
  ${({ color }) =>
    !!color &&
    css`
      & svg, & path {
        ${({ type }: any) => type === 'fill' && `fill: ${color}`};
        ${({ type }: any) => type === 'stroke' && `stroke: ${color}`};
      }
    `};
  
  ${({ hover }: any) =>
    !!hover &&
    css`
      cursor: pointer;

      & svg, & path {
        transition: fill ${transitionsDelay} linear, stroke ${transitionsDelay} linear;
      }

      &:hover {
        & svg, & path {
          ${({ type }: any) => type === 'fill' && `fill: ${hover}`};
          ${({ type }: any) => type === 'stroke' && `stroke: ${hover}`};
        }
      }
    `};
  
  & svg {
    ${({ size }: any) => setSize(size)};
  }

  ${generateProps};
`;
