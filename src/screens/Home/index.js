import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styles
import * as C from './styles';
import { COLORS } from '../../theme';

// import { request, PERMISSIONS } from 'react-native-permissions';

// Geolocation
import * as Location from 'expo-location';
// import Geolocation from '@react-native-community/geolocation';

// Api
import Api from '../../services/Api';

// Components
import BarberItem from '../../components/BarberItem';

// IconSvg
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');

  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permissão para acessar a localização Negada!');
      return;
    }

    setLoading(true);
    setLocationText('');
    setList([]);

    let location = await Location.getCurrentPositionAsync();
    setCoords(location.coords);
    getBarbers();


    var text = 'Esperando...'

    if (errorMsg) {
      text = errorMsg;
    } else {
      text = JSON.stringify(location)
    }
  }


  // Função que faz a busca de todos os barbeiros da localização proxima
  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let latitudeAtual = null;
    let longitudeAtual = null;

    // Verifica se foi passado cordenadas
    if (coords) {
      latitudeAtual = coords.latitude;
      longitudeAtual = coords.longitude;
    }

    let response = await Api.getBarbers(latitudeAtual, longitudeAtual, locationText);

    if (response.error == '') {
      if (response.loc) {
        setLocationText(response.loc);
      }
      setList(response.data);
    } else {
      alert('Error: ' + response.error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getBarbers();
  }, []);

  const onRefresh = async () => {
    setRefreshing(false);
    getBarbers();
  }

  // Zera as coordenadas, e rodar uma nova pesquisa dos barbeiros
  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  }

  return (
    <C.Container>

      <C.Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        <C.HeaderArea>
          <C.HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</C.HeaderTitle>
          <C.SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill={COLORS.WHITE} />
          </C.SearchButton>
        </C.HeaderArea>

        <C.LocationArea>

          <C.LocationInput
            placeholder="Onde você está?"
            placeholderTextColor={COLORS.WHITE}
            value={locationText}
            onChangeText={(t) => setLocationText(t)}
            onEndEditing={handleLocationSearch}
          />

          <C.LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width='24' height='24' fill={COLORS.WHITE} />
          </C.LocationFinder>
        </C.LocationArea>

        {loading &&
          <C.LoadingIcon size="large" color={COLORS.WHITE} />
        }
        <C.ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </C.ListArea>

      </C.Scroller>

    </C.Container>
  );
}