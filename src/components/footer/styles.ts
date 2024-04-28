import styled from 'styled-components';
import { Box } from '../../styles/basicStyles';

export const FooterWrapper = styled(Box)`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.rangoonGreen};
  justify-content: center;
  align-items: center;
  width: 100%;
`;
