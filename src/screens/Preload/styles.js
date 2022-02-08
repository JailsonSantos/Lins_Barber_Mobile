import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  background-color: ${COLORS.CERISE_PRIMARY};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BarberLogo = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 60px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 25px;
`;