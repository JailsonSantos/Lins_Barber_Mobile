import React from 'react';
import * as C from './styles';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Components
import Stars from '../../components/Stars';

export default ({ data }) => {

  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars
    });
  }

  return (
    <C.Area onPress={handleClick}>
      <C.Avatar source={{ uri: data.avatar }} />
      <C.InfoArea>
        <C.UserName>{data.name}</C.UserName>

        <Stars stars={data.stars} showNumber={true} />

        <C.SeeProfileButton>
          <C.SeeProfileButtonText>Ver Perfil</C.SeeProfileButtonText>
        </C.SeeProfileButton>

      </C.InfoArea>
    </C.Area>
  );
}