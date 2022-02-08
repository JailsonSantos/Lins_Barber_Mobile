import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  top: 25px;
  flex: 1;
  background-color: ${COLORS.CERISE_PRIMARY};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const ListArea = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text`
  text-align: center;
  margin-top: 30px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
  font-size: 16px;
`;