import React, { useState, useEffect } from 'react';
import * as C from './styles';

// Refresh
import { RefreshControl } from 'react-native';

// Components
import BarberItem from '../../components/BarberItem';

// Api
import Api from '../../services/Api';

export default () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  // Busca de favoritos
  useEffect(() => {
    getFavorites();
  }, []);

  // Função de busca
  const getFavorites = async () => {
    setLoading(true);
    setList([]);

    let response = await Api.getFavorites();

    if (response.error == '') {
      setList(response.list);
    } else {
      alert("Error: " + response.error);
    }

    setLoading(false);
  }

  return (
    <C.Container>
      <C.HeaderArea>
        <C.HeaderTitle>Favoritos</C.HeaderTitle>
      </C.HeaderArea>

      <C.Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getFavorites} />
        }
      >

        {!loading && list.length === 0 &&
          <C.EmptyWarning>Não há Favoritos.</C.EmptyWarning>
        }

        <C.ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </C.ListArea>

      </C.Scroller>
    </C.Container >
  )
}