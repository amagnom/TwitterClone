import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  //essa banner e a parte azul da tela
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Arildo Magno</h1>
        <h2>@ArildoMagno</h2>

        <p>
          Developer at <a href="https://github.com/ArildoMagno">@ArildoMagno</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
           Formiga, Minas Gerais
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 14 de outubro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>75</strong>
          </span>
          <span>
            <strong>38 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;