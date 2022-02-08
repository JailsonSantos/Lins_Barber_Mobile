import React, { useEffect, useContext } from 'react';

// Styles
import * as C from './styles';
import { COLORS } from '../../theme';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

// Context
import { UserContext } from '../../contexts/UserContext';

// Api
import Api from '../../services/Api';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);


  const navigation = useNavigation();

  useEffect(() => {
    // Verifica se tem token, salvo e recuperar
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('@token');
      // validar o token
      if (token) {
        let response = await Api.checkToken(token);

        if (response.token) {
          await AsyncStorage.setItem('@token', response.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: response.data.avatar
            }
          });

          navigation.reset({
            routes: [{ name: 'MainTab' }]
          });

        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, []);

  return (
    <C.Container>
      <C.BarberLogo source={require('../../assets/barber.png')} />
      <C.LoadingIcon size="large" color={COLORS.WHITE} />
    </C.Container>
  );
}