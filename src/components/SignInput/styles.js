import styled from 'styled-components/native';
import { FONTS, COLORS } from '../../theme';

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${COLORS.GRAY_SECONDARY};
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${COLORS.CERISE_SECONDARY};
  margin-left: 10px;
`;