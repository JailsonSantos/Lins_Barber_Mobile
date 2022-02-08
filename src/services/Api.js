import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  // Verifica Token
  checkToken: async (token) => {
    const request = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });

    const response = await request.json();
    return response;
  },
  // Login
  signIn: async (email, password) => {
    const request = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const response = await request.json();
    return response;
  },
  // Cadastro
  signUp: async (name, email, password) => {
    const request = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const response = await request.json();
    return response;
  },
  // Logout
  logout: async () => {
    const token = await AsyncStorage.getItem('@token');

    const request = await fetch(`${BASE_API}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });

    const response = await request.json();
    return response;
  },
  // Selecionar todos os barbeiros
  getBarbers: async (latitudeAtual = null, longitudeAtual = null, address = null) => {
    const token = await AsyncStorage.getItem('@token');
    const request = await fetch(`${BASE_API}/barbers?token=${token}&lat=${latitudeAtual}&lng=${longitudeAtual}&addres=${address}`);
    const response = await request.json();

    return response;
  },
  // Selecionar todos os barbeiros
  getBarber: async (id) => {

    const token = await AsyncStorage.getItem('@token');
    const request = await fetch(`${BASE_API}/barber/${id}?token=${token}`);
    const response = await request.json();

    return response;
  },
  // Selecionar favoritar ou não do barbeiro
  setFavorite: async (barberId) => {
    const token = await AsyncStorage.getItem('@token');

    const request = await fetch(`${BASE_API}/user/favorite`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, barber: barberId })
    });

    const response = await request.json();
    return response;
  },
  // Faz o agendamento do barbeiro
  setAppointment: async (userId, service, selectedYear, selectedMonth, selectedDay, selectedHour) => {

    const token = await AsyncStorage.getItem('@token');

    const request = await fetch(`${BASE_API}/barber/${userId}/appointment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        service,
        year: selectedYear,
        month: selectedMonth,
        day: selectedDay,
        hour: selectedHour
      })
    });

    const response = await request.json();
    return response;
  },
  // Selecão de barbeiros
  search: async (barberName) => {
    const token = await AsyncStorage.getItem('@token');
    const request = await fetch(`${BASE_API}/search?q=${barberName}&token=${token}`);
    const response = await request.json();

    return response;
  },
  // Selecão de barbeiros favoritos
  getFavorites: async () => {
    const token = await AsyncStorage.getItem('@token');
    const request = await fetch(`${BASE_API}/user/favorites?token=${token}`);
    const response = await request.json();

    return response;
  },
  // Selecão de agendamentos
  getAppointments: async () => {
    const token = await AsyncStorage.getItem('@token');
    const request = await fetch(`${BASE_API}/user/appointments?token=${token}`);
    const response = await request.json();

    return response;
  },
  // Tela de atualização do Perfil
  updateUser: async (body) => {

    const token = await AsyncStorage.getItem('@token');
    body.token = token;

    const request = await fetch(`${BASE_API}/user`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const response = await request.json();
    return response;
  },
}

/*
Verificações feita no backend

pode atualizar todos os campos ou apenas 1, 2, etc.

nome pelo menos 2 caracteres
email valido e nao pode constar no banco de dados
senha tem que ser igual a confirmar senha

a informação é mostrada no error como um objeto, monstrando qual campo deu erro

Api.updateUser({
  name: 'novo nome',
  email: 'novo email',
  password: '123',
  password_confirm: '123'
}) */