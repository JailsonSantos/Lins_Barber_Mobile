import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as C from './styles';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Context
import { UserContext } from '../../contexts/UserContext';

// Api
import Api from '../../services/Api';

// Components
import SignInput from '../../components/SignInput';

// Svgs
import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LookIcon from '../../assets/lock.svg';

export default () => {

  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField != '' && emailField != '' && passwordField != '') {
      let response = await Api.signUp(nameField, emailField, passwordField);

      console.log(response);

      if (response.token) {

        try {
          await AsyncStorage.setItem('@token', response.token)

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: response.data.avatar
            }
          });

          navigation.reset({
            routes: [{ name: 'MainTab' }]
          });

        } catch (e) {
          alert('Error: ' + e);
        }

      } else {
        alert('Error: ' + response.error);
      }
    } else {
      alert('Preencha os campos!');
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    });
  }

  return (
    <C.Container>

      <BarberLogo width="50%" height="160" />

      <C.InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          IconSvg={LookIcon}
          placeholder="Digite sua Senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <C.CustomButton onPress={handleSignClick} >
          <C.CustomButtonText>CADASTRAR</C.CustomButtonText>
        </C.CustomButton>

      </C.InputArea>

      <C.SingMessageButton onPress={handleMessageButtonClick}>
        <C.SingMessageButtonText>Já possui uma conta?</C.SingMessageButtonText>
        <C.SingMessageButtonTextBold>Faça login</C.SingMessageButtonTextBold>
      </C.SingMessageButton>

    </C.Container >
  );
}