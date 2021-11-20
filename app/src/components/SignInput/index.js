import React from "react";

// Styles
import * as C from './styles';
import { COLORS } from '../../theme';

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <C.InputArea>
      <IconSvg width="24" height="24" fill={COLORS.CERISE_QUALITY} />
      <C.Input
        placeholder={placeholder}
        placeholderTextColor={COLORS.CERISE_QUALITY}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </C.InputArea>
  );
}