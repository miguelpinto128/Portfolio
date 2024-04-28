import { generateProps } from 'styled-gen';
import { breakpoints } from './breakpoints';
import styled, { createGlobalStyle } from 'styled-components';

// In some parts we need a breakpoint below 390px (ex: for the banner title we need a new specific breakpoint for the text to ocupy just 2 lines)
export const extraBreakpoint = 24.375;

export const transitionsDelay = '0.3s';

export const BasicStyles = createGlobalStyle`
  html, body {
    font-family: 'Poppins', sans-serif !important;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden !important;
  }

  * {
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
  }

  body {
    font-family: 'Poppins', sans-serif !important;
    color: ${({ theme }) => theme.colors.black} !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden !important;

  }

  p, ol, ul, dl {
    font-family: 'Poppins', sans-serif !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    font-family: 'Poppins', sans-serif !important;
    text-decoration: none;
  }

  #nprogress {
    & .bar {
      background: ${({ theme }) => theme.colors.pinkRed};

      & .peg {
        box-shadow: 0 0 0.625rem ${({ theme }) => theme.colors.purple}, 0 0 0.313rem ${({ theme }) => theme.colors.pinkRed};
      }
    }

    & .spinner-icon {
      border-top-color: ${({ theme }) => theme.colors.pinkRed};
      border-left-color: ${({ theme }) => theme.colors.pinkRed};
    }

    & .spinner {
      top: 0.625rem;
      right: 0.625rem;
    }
  }

  & .Typewriter {
    display: inline-block;

    & .Typewriter__cursor {
      display: none;
    }
  }

  #hubspot-messages-iframe-container {
    z-index: 9999 !important;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const ViewContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 92.5rem;
  padding: 0 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.md} {
    padding: 0 1.563rem;
  }

  ${generateProps};
`;

export const MainContainerFullWidth = styled.div`
  width: 100%;
  max-width: 92.5rem;
  padding: 0 3.125rem;
  margin: auto;

  @media ${breakpoints.md} {
    padding: 0;
    max-width: 100%;
  }
`;

export const MainContainerBlog = styled.div`
  padding: 3.75rem;
  position: relative;
  max-width: 57.5rem;
  margin: auto;

  @media ${breakpoints.md} {
    padding: 1.563rem;
  }
`;

export const Box = styled.div<any>`
  display: flex;
  flex-direction: ${({ fDirection }) => fDirection ? fDirection : 'row'};
  justify-content: ${({ fJustify }) => fJustify ? fJustify : 'flex-start'};
  align-items: ${({ fAlign }) => fAlign ? fAlign : 'flex-start'};
  width: 100%;
  
  ${generateProps};
`;

export const Link = styled.a<any>`
  display: flex;
  flex-direction: ${({ fDirection }) => fDirection ? fDirection : 'row'};
  justify-content: ${({ fJustify }) => fJustify ? fJustify : 'flex-start'};
  align-items: ${({ fAlign }) => fAlign ? fAlign : 'flex-start'};
  width: 100%;
  
  ${generateProps};
`;

export const Block = styled.div<any>`
  ${generateProps};
`;

export const Image = styled.img<any>`
  ${generateProps};
`;

export const BasicForm = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const EllipsisText = styled(Block)<{lines: number, ellipsisColor?: string}>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => lines ? lines : 1}; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ ellipsisColor, theme }) => ellipsisColor ? ellipsisColor : theme.colors.black}; 
  word-break: break-word;
`;
