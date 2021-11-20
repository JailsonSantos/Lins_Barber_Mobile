import React from 'react';
import { Button } from 'react-native';
import * as C from './styles';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Api
import Api from '../../services/Api';

export default () => {

  const navigation = useNavigation();

  const handleLogoutClick = async () => {

    await Api.logout();

    navigation.reset({
      routes: [{ name: 'SignIn' }]
    });
  }

  return (
    <C.Container>
      <C.Title>Profile</C.Title>

      <C.ButtonLogout onPress={handleLogoutClick}>
        <C.ButtonLogoutText>Sair</C.ButtonLogoutText>
      </C.ButtonLogout>

    </C.Container>
  )
}