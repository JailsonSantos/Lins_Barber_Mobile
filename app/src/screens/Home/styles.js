import React from 'react';
import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Container = styled.SafeAreaView`
  top: 25px;
  flex: 1;
  background-color: ${COLORS.CERISE_PRIMARY};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`;
export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationArea = styled.View`
  background-color: ${COLORS.CERISE_SECONDARY};
  height:60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${COLORS.WHITE};
`;
export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;