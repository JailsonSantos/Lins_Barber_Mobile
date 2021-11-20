import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const StarArea = styled.View`
  flex-direction: row;
`;

export const StarView = styled.View``;

export const StarText = styled.Text`
  font-size: 12px;
  font-family: ${FONTS.BOLD};
  margin-left: 5px;
  color: ${COLORS.GRAY_SECONDARY};
`;