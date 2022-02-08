import React, { useState } from 'react';

// Styles
import * as C from './styles';
import { COLORS } from '../../theme';

// Components
import BarberItem from '../../components/BarberItem';

// Api
import Api from '../../services/Api';

export default () => {

  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [list, setList] = useState([]);

  // Função de busca
  const searchBarbers = async () => {
    setEmptyList(false)
    setLoading(true);
    setList([]);

    if (searchText != '') {
      let response = await Api.search(searchText);

      if (response.error == '') {

        if (response.list.length > 0) {
          setList(response.list);
        } else {
          setEmptyList(true);
        }

      } else {
        alert("Error: " + response.error);
      }
    }

    setLoading(false);
  }

  return (
    <C.Container>
      <C.SearchArea>
        <C.SearchInput placeholder="Digite o nome do barbeiro"
          placeholderTextColor={COLORS.WHITE}
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </C.SearchArea>

      <C.Scroller>
        {loading &&
          <C.LoadingIcon size="large" color={COLORS.WHITE} />
        }

        {emptyList &&
          <C.EmptyWarning>Não achamos barbeiros com o nome "{searchText}" </C.EmptyWarning>
        }

        <C.ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </C.ListArea>

      </C.Scroller>
    </C.Container>
  )
}