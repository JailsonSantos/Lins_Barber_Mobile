import React from 'react'
import * as C from './styles';

export default ({ data }) => {

  // Data e Hora
  let d = data.datetime.split(' ');

  // Tempo
  let time = d[1].substring(0, 5);

  // Data
  let date = new Date(d[0]);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // Formatando mes e dia para adicionar 0, em caso de valores menores que 10
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  let dateString = `${day}/${month}/${year}`;



  return (
    <C.Area>
      <C.UserArea>
        <C.Avatar source={{ uri: data.barber.avatar }} />
        <C.UserName>{data.barber.name}</C.UserName>
      </C.UserArea>

      <C.SplitArea>
        <C.ServiceText>{data.service.name}</C.ServiceText>
        <C.ServiceText>R$ {data.service.price.toFixed(2)}</C.ServiceText>
      </C.SplitArea>

      <C.SplitArea>
        <C.DateText>{dateString}</C.DateText>
        <C.DateText>{time}</C.DateText>
      </C.SplitArea>

    </C.Area>
  );
}