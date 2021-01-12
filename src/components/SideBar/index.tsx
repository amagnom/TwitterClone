import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Galo Galinacio"
                nickname="@galoGalinacio"
              />,
              <FollowSuggestion 
              name="Coelho Pernalonga" 
              nickname="@pernalongaCoelho" 
             />,

              <FollowSuggestion
                name="Johnny  Bravo"
                nickname="@bravoJohnny"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News 
              area="Assuntos do momento no Brasil"
              noticia="Brail ganha algo"/>,
              <News 
              area="Assuntos do momento no Brasil"
              noticia="Dota cresce no Brasil"/>,
              <News 
              area="Assuntos do momento no Mundo"
              noticia="Programadores estao descontentes"/>
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;