import React from 'react';

import { Container } from './styles';

interface Props {
  area: string;
  noticia: string;
}


const News: React.FC<Props> = ({area, noticia }) => {
  return (
    <Container>
      <span>{area}</span>
      <strong>{noticia}</strong>
    </Container>
  );
};

export default News;