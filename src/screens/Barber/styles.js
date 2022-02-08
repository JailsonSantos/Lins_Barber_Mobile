import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  top: 25px;
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${COLORS.WHITE};
  border-radius: 5px;
  margin: 3px;
`;
export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${COLORS.CERISE_TERTIARY};
  border-radius: 5px;
  margin: 3px;
`;
export const SwipeItem = styled.View`
  flex: 1;
  background-color: ${COLORS.CERISE_PRIMARY};
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;
export const FakeSwiper = styled.View`
  height: 240px;
  background-color: ${COLORS.CERISE_PRIMARY};
`;

export const PageBody = styled.View`
  background-color: ${COLORS.WHITE};
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;
export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: ${COLORS.WHITE};
`;
export const UserInfo = styled.View`
  flex: 1px;
  justify-content: flex-end;
`;
export const UserInfoName = styled.Text`
  color: ${COLORS.BLACK_PRIMARY};
  font-size: 18px;
  font-family: ${FONTS.BOLD};
  margin-bottom: 10px;
`;
export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.GRAY_PRIMARY};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;


export const ServiceArea = styled.View`
  margin-top: 30px;
`;
export const ServicesTitle = styled.Text`
  font-size: 18px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CERISE_SECONDARY};
  margin-left: 30px;
  margin-bottom: 20px;
`;
export const ServiceItem = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;
export const ServiceInfo = styled.View`
  flex: 1;
`;
export const ServiceName = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.CERISE_TERTIARY};
`;
export const ServicePrice = styled.Text`
  font-size: 14px;  
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.CERISE_TERTIARY};
`;
export const ServiceChooseButton = styled.TouchableOpacity`
  background-color: ${COLORS.CERISE_TERTIARY};
  border-radius: 10px;
  padding: 10px 15px;
`;
export const ServiceChooseBtnText = styled.Text`
  font-size:  14px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;

export const TestimonialArea = styled.View`
  margin-top: 30px;
  margin-bottom: 50px;
`;
export const TestimonialItem = styled.View`
  background-color: ${COLORS.CERISE_SECONDARY};
  padding: 15px;
  border-radius: 10px;
  height: 110px;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
`;
export const TestimonialInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const TestimonialName = styled.Text`
  font-size: 14px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;
export const TestimonialBody = styled.Text`
  font-size: 13px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
`;