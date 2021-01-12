import styled from 'styled-components';

//como o botao vai ser reutilizado vamos usar a props para saber se add a segunda
//estilização ou não
interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  //movimento de pssar a mao acima, e se vier o outiliened coloca a outra cor
  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`;