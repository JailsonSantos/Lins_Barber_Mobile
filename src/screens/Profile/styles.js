import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  top: 25px;
  background-color: ${COLORS.CERISE_PRIMARY};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;

export const ButtonLogout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.GRAY_PRIMARY};
  border-radius: 10px;
  padding: 10px 15px;
  height: 60px;
  width: 96%;
`;
export const ButtonLogoutText = styled.Text`
  font-size:  30px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;