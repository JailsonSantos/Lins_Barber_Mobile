import React from 'react';

// Styles
import * as C from './styles';
import { COLORS } from '../../theme';

// IconSvg
import StarFull from '../../assets/star.svg';
import StarHalf from '../../assets/star_half.svg';
import StarEmpty from '../../assets/star_empty.svg'

export default ({ stars, showNumber }) => {
  let starNumber = [0, 0, 0, 0, 0];

  // Retorna apenas os inteiros
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    starNumber[i] = 2;
  }
  if (left > 0) {
    starNumber[i] = 1;
  }

  return (
    <C.StarArea>
      {starNumber.map((number, k) => (
        <C.StarView key={k}>
          {number === 0 && <StarEmpty width="18" height="18" fill={COLORS.ORANGE} />}
          {number === 1 && <StarHalf width="18" height="18" fill={COLORS.ORANGE} />}
          {number === 2 && <StarFull width="18" height="18" fill={COLORS.ORANGE} />}
        </C.StarView>
      ))}

      {showNumber && <C.StarText>{stars}</C.StarText>}
    </C.StarArea>
  )
}