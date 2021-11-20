import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

// Styles
import * as C from './styles';
import { COLORS } from '../../theme';

// Api
import Api from '../../services/Api';

// IconSvg
import ExpandIcon from '../../assets/expand.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';


const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];
const days = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
];

export default ({ show, setShow, user, service }) => {
  const navigation = useNavigation();

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    if (user.available) {
      let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
      let newListDays = [];

      for (let i = 1; i <= daysInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        let selDate = `${year}-${month}-${day}`;

        let availability = user.available.filter(e => e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[d.getDay()],
          number: i
        });
      }

      setListDays(newListDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(0);
    }
  }, [user, selectedMonth, selectedYear]);

  // Monitora o dia selecionado para exibir a lista de horas disponiveis
  useEffect(() => {
    if (user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      let selDate = `${year}-${month}-${day}`;

      let availability = user.available.filter(e => e.date === selDate);

      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }
    }
    setSelectedHour(null);
  }, [user, selectedDay]);

  // Exibe o calendario
  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  // Diminui um mês na data selecionada
  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  // Adiciona um mês a data selecionada
  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  // Fecha o modal
  const handleCloseButton = () => {
    setShow(false);
  }

  // Função de finalizar agendamento
  const handleFinishClick = async () => {
    if (
      user.id &&
      service != null &&
      selectedYear > 0 &&
      selectedMonth > 0 &&
      selectedDay > 0 &&
      selectedHour != null
    ) {
      let response = await Api.setAppointment(
        user.id,
        user.services[service].id,
        selectedYear,
        selectedMonth + 1,
        selectedDay,
        selectedHour
      );
      if (response.error == '') {
        setShow(false);
        navigation.navigate('Appointments');
      } else {
        alert(response.error);
      }
    } else {
      alert("Preencha todos os dados");
    }
  }

  return (
    <C.Modal
      transparent={true}
      visible={show}
      animationType="slide"
    >
      <C.ModalArea>
        <C.ModalBody>
          <C.CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill={COLORS.WHITE} />
          </C.CloseButton>

          <C.ModalItem>
            <C.UserInfo>
              <C.UserAvatar source={{ uri: user.avatar }} />
              <C.UserName>{user.name}</C.UserName>
            </C.UserInfo>
          </C.ModalItem>

          {service != null &&
            <C.ModalItem>
              <C.ServiceInfo>
                <C.ServiceName>{user.services[service].name}</C.ServiceName>
                <C.ServicePrice>R$ {user.services[service].price.toFixed(2)}</C.ServicePrice>
              </C.ServiceInfo>
            </C.ModalItem>
          }

          <C.ModalItem>
            <C.DateInfo>
              <C.DatePrevArea onPress={handleLeftDateClick}>
                <NavPrevIcon width="35" height="35" fill={COLORS.BLACK_PRIMARY} />
              </C.DatePrevArea>
              <C.DateTitleArea>
                <C.DateTitle>{months[selectedMonth]} {selectedYear}</C.DateTitle>
              </C.DateTitleArea>
              <C.DateNextArea onPress={handleRightDateClick}>
                <NavNextIcon width="35" height="35" fill={COLORS.BLACK_PRIMARY} />
              </C.DateNextArea>
            </C.DateInfo>
            <C.DateList horizontal={true} showsHorizontalScrollIndicator={false}>
              {listDays.map((item, key) => (
                <C.DateItem
                  key={key}
                  onPress={() => item.status ? setSelectedDay(item.number) : null}
                  style={{
                    opacity: item.status ? 1 : 0.5,
                    backgroundColor: item.number === selectedDay ? COLORS.CERISE_TERTIARY : COLORS.WHITE
                  }}
                >
                  <C.DateItemWeekDay
                    style={{
                      color: item.number === selectedDay ? COLORS.WHITE : COLORS.BLACK_PRIMARY
                    }}
                  >{item.weekday}</C.DateItemWeekDay>
                  <C.DateItemNumber
                    style={{
                      color: item.number === selectedDay ? COLORS.WHITE : COLORS.BLACK_PRIMARY
                    }}
                  >{item.number}</C.DateItemNumber>
                </C.DateItem>
              ))}
            </C.DateList>
          </C.ModalItem>

          {selectedDay > 0 && listHours.length > 0 &&
            <C.ModalItem>

              <C.TimeList horizontal={true} showsHorizontalScrollIndicator={false}>
                {listHours.map((item, key) => (
                  <C.TimeItem
                    key={key}
                    onPress={() => setSelectedHour(item)}
                    style={{
                      backgroundColor: item === selectedHour ? COLORS.CERISE_TERTIARY : COLORS.WHITE
                    }}
                  >
                    <C.TimeItemText
                      style={{
                        color: item === selectedHour ? COLORS.WHITE : COLORS.BLACK_PRIMARY,
                        fontWeight: item === selectedHour ? 'bold' : 'normal'
                      }}
                    >{item}</C.TimeItemText>
                  </C.TimeItem>
                ))}
              </C.TimeList>
            </C.ModalItem>
          }

          <C.FinishButton onPress={handleFinishClick}>
            <C.FinishButtonText>Finalizar Agendamento</C.FinishButtonText>
          </C.FinishButton>

        </C.ModalBody>
      </C.ModalArea>
    </C.Modal>
  );
}