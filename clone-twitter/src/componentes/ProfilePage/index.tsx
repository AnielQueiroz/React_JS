import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Aniel Queiroz</h1>
            <h2>@a_squeiroz</h2>

            <p>
                Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Bahia, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 07 de agosto de 1998
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong> 94</strong>
                </span>
                <span>
                    <strong>242 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  )
}

export default ProfilePage;