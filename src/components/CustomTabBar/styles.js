import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const TabArea = styled.View`
  height: 60px;
  background-color: ${COLORS.CERISE_SECONDARY};
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  border-radius:  35px;
  border: 3px solid ${COLORS.CERISE_TERTIARY};
  margin-top: -20px;
`;

export const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;