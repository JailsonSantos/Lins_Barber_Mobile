import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Modal = styled.Modal``;

export const ModalArea = styled.View`
  flex: 1;
  background-color: ${COLORS.BLACK_THEME_SWIPER};
  justify-content: flex-end;
`;
export const ModalBody = styled.View`
  background-color: ${COLORS.CERISE_TERTIARY};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px; 
`;
export const ModalItem = styled.View`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;
export const UserName = styled.Text`
  color: ${COLORS.BLACK_PRIMARY};
  font-size: 18px;
  font-family: ${FONTS.BOLD};
`;
export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ServiceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ServiceName = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
`;
export const ServicePrice = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
`;

export const FinishButton = styled.TouchableOpacity`
  background-color: ${COLORS.CERISE_SECONDARY};
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const FinishButtonText = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 17px;
  font-family: ${FONTS.BOLD};
`;

export const DateInfo = styled.View`
  flex-direction: row;
`;
export const DatePrevArea = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items:  flex-end;
`;
export const DateTitleArea = styled.View`
  width: 140px;
  justify-content: center;
  align-items: center;
`
export const DateTitle = styled.Text`
  font-size: 17px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BLACK_PRIMARY};
`;

export const DateNextArea = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

export const DateList = styled.ScrollView``;
export const DateItem = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;
export const DateItemNumber = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;

export const TimeList = styled.ScrollView``;
export const TimeItem = styled.TouchableOpacity`
  width: 75px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const TimeItemText = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.REGULAR};
`;
