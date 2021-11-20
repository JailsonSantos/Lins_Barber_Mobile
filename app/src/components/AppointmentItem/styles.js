import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const Area = styled.View`
  background-color: ${COLORS.WHITE};
  padding: 15px;
  margin-bottom: 20px;
  border-radius:  20px;
`;

export const UserArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 20px;
`;
export const UserName = styled.Text`
  font-size: 18px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BLACK_PRIMARY};
`;

export const SplitArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ServiceText = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BLACK_PRIMARY};
`;
export const DateText = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${COLORS.CERISE_TERTIARY};
`;