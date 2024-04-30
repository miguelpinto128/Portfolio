import styled from 'styled-components';
import { Box } from '../../styles/basicStyles';
import { breakpoints } from '../../styles/breakpoints';

export const FooterWrapper = styled(Box)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.rangoonGreen};
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media ${breakpoints.lg} {
    flex-direction: column;
  }
`;
