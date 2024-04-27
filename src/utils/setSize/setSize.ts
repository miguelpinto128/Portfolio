import { css } from 'styled-components';

export const setSize = (size: number | [number, number], defaultSize = 1) => {
  if(Array.isArray(size)) {
    return css`
      width: ${size?.[0]}rem;
      height: ${size?.[1]}rem;
    `;
  }

  return css`
    width: ${size || defaultSize}rem;
    height: ${size || defaultSize}rem;
  `;
};
