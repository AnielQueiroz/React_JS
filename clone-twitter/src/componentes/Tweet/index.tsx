import React from 'react';
import { Container } from './styles';

// import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>Rocketseat</strong>
                    <span>@rocketseat</span>
                    <Dot />
                    <time>27 de jun</time>
                </Header>

                <Description>Foguete não tem ré</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <ComentIcon />
                        18
                    </Status>
                    <Status>
                        <ComentIcon />
                        18
                    </Status>
                    <Status>
                        <ComentIcon />
                        18
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;