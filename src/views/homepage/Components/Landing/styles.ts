import styled from 'styled-components';
import { Box } from '../../../../styles/basicStyles';

export const LandingPageWrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black} !important;
  align-items: center;
`;

export const NameWrapper = styled(Box)`
 flex-direction: column;
`;

export const BannerCircle1 = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 17.5rem;
  height: 17.5rem;
  border-radius: 50%;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(129, 108, 255, 0.80) 0%, rgba(129, 108, 255, 0.80) 100%);
  filter: blur(7.5rem);
  z-index: 1;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const BannerCircle2 = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(100, 255, 227, 0.60) 0%, rgba(100, 255, 227, 0.60) 100%);
  filter: blur(6.25rem);
  z-index: 2;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const BannerCircle3 = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(129, 108, 255, 0.50) 0%, rgba(129, 108, 255, 0.50) 100%);
  filter: blur(5rem);
  z-index: 3;
  // This code is to fix issues with the gradient in IOS
  transform: translateZ(0);
  backface-visibility: hidden;
`;
