import React, { useState, useEffect } from 'react';
import * as C from './styles';

// Refresh
import { RefreshControl } from 'react-native';

// Components
import AppointmentItem from '../../components/AppointmentItem';

// Api
import Api from '../../services/Api';

export default () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  // Busca de favoritos
  useEffect(() => {
    getAppointments();
  }, []);

  // Exibe os agendamentos
  const getAppointments = async () => {
    setLoading(true);
    setList([]);

    let response = await Api.getAppointments();

    if (response.error == '') {
      setList(response.list);
    } else {
      alert("Error: " + response.error);
    }

    setLoading(false);
  }

  return (
    <C.Container>

      <C.Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getAppointments} />
        }
      >

        {!loading && list.length === 0 &&
          <C.EmptyWarning>Não há Agendamentos.</C.EmptyWarning>
        }

        <C.ListArea>
          {list.map((item, key) => (
            <AppointmentItem key={key} data={item} />
          ))}
        </C.ListArea>

      </C.Scroller>
    </C.Container >
  )
}