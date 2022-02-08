import React, { useState, useEffect } from 'react';
import * as C from './styles';
import { COLORS } from '../../theme';

// Swiper
import Swiper from 'react-native-swiper';

// Navigator, Routes
import { useNavigation, useRoute } from '@react-navigation/native';

// Api
import Api from '../../services/Api';

// Components
import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

// Icon-svg
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

export default () => {

  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Exibe os detalhes do Barbeiro selecionado
  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);

      let response = await Api.getBarber(userInfo.id);

      if (response.error == '') {
        setUserInfo(response.data);
        setFavorited(response.data.favorited);
      } else {
        alert("Error: " + response.error);
      }
      setLoading(false);
    }
    getBarberInfo();
  }, []);

  // Função de voltar
  const handleBackButton = () => {
    navigation.goBack();
  }

  // Função de Favoritar
  const handleFavClick = () => {
    setFavorited(!favorited);
    Api.setFavorite(userInfo.id);
  }

  // Função de agendamento do serviço
  const handleServiceChoose = (key) => {
    setSelectedService(key);
    setShowModal(true);
  }

  return (
    <C.Container>
      <C.Scroller>

        {userInfo.photos && userInfo.photos.length > 0 ?
          <Swiper
            style={{ height: 240 }}
            dot={<C.SwipeDot />}
            activeDot={<C.SwipeDotActive />}
            paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
            autoplay={true}
          >
            {userInfo.photos.map((item, key) => (
              <C.SwipeItem key={key}>
                <C.SwipeImage source={{ uri: item.url }} resizeMode="cover" />
              </C.SwipeItem>
            ))}

          </Swiper>
          :
          <C.FakeSwiper></C.FakeSwiper>
        }

        <C.PageBody>

          {/* Exibe informações do Barbeiro */}
          <C.UserInfoArea>
            <C.UserAvatar source={{ uri: userInfo.avatar }} />

            <C.UserInfo>
              <C.UserInfoName>{userInfo.name}</C.UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </C.UserInfo>

            {/* Exibe os icons de favoritos */}
            <C.UserFavButton onPress={handleFavClick}>
              {favorited ?
                <FavoriteFullIcon width="24" height="24" fill={COLORS.CERISE_PRIMARY} />
                :
                <FavoriteIcon width="24" height="24" fill={COLORS.CERISE_PRIMARY} />
              }
            </C.UserFavButton>

          </C.UserInfoArea>

          {loading &&
            <C.LoadingIcon size="large" color={COLORS.CERISE_SECONDARY} />
          }

          {/* Exibe os serviços do barbeiro */}
          {userInfo.services &&
            <C.ServiceArea>
              <C.ServicesTitle>Lista de Serviços</C.ServicesTitle>

              {userInfo.services.map((item, key) => (
                <C.ServiceItem key={key}>
                  <C.ServiceInfo>
                    <C.ServiceName>{item.name}</C.ServiceName>
                    <C.ServicePrice>R$ {item.price.toFixed(2)}</C.ServicePrice>
                  </C.ServiceInfo>
                  <C.ServiceChooseButton onPress={() => handleServiceChoose(key)}>
                    <C.ServiceChooseBtnText>Agendar</C.ServiceChooseBtnText>
                  </C.ServiceChooseButton>
                </C.ServiceItem>
              ))}

            </C.ServiceArea>
          }

          {/* Exibe os depoimentos */}
          {userInfo.testimonials && userInfo.testimonials.length > 0 &&
            <C.TestimonialArea>
              <Swiper
                style={{ height: 110 }}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon width="35" height="35" fill={COLORS.CERISE_SECONDARY} />}
                nextButton={<NavNextIcon width="35" height="35" fill={COLORS.CERISE_SECONDARY} />}
              >
                {userInfo.testimonials.map((item, key) => (
                  <C.TestimonialItem key={key}>
                    <C.TestimonialInfo>
                      <C.TestimonialName>{item.name}</C.TestimonialName>
                      <Stars star={item.star} showNumber={true} />
                    </C.TestimonialInfo>
                    <C.TestimonialBody>{item.body}</C.TestimonialBody>
                  </C.TestimonialItem>
                ))}
              </Swiper>
            </C.TestimonialArea>
          }

        </C.PageBody>
      </C.Scroller>
      <C.BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill={COLORS.WHITE} />
      </C.BackButton>

      {/* Component Modal */}
      <BarberModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />

    </C.Container>
  );
}