import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  top: 25px;
  flex: 1;
  background-color: ${COLORS.CERISE_PRIMARY};
`;

export const SearchArea = styled.View`
  background-color: ${COLORS.CERISE_SECONDARY};
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 20px;
  margin-bottom: 0;
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${COLORS.WHITE};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
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
  font-size: 14px;
`;