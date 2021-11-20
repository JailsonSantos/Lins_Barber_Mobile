import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Area = styled.TouchableOpacity`
  background-color: ${COLORS.WHITE};
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  font-size: 17px;
  font-family: ${FONTS.BOLD};
`;

export const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid ${COLORS.CERISE_PRIMARY};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CERISE_SECONDARY};
`;