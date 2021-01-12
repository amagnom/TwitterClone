import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

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
            <strong>PatoQueFazQuac</strong>
            <span>@PatoQuac</span>
            <Dot />
            <time>02 de jan</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Quac !</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              3
            </Status>
            <Status>
              <RetweetIcon />
              5
            </Status>
            <Status>
              <LikeIcon />
              63
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;