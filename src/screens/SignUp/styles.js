import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  background-color: ${COLORS.CERISE_PRIMARY};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%; 
  padding: 0px 40px 40px 40px;
  margin-bottom: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${COLORS.CERISE_SECONDARY};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;


export const CustomButtonText = styled.Text`
  font-size: 18px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
`;

export const SingMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -40px;
`;

export const SingMessageButtonText = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.GRAY_SECONDARY};
`;

export const SingMessageButtonTextBold = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
  margin-left: 5px;
`;

