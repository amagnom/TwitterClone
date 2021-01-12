import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  //aqui é um calculo basicamente, tamanho minimo é 601, mas se tiver abaixo disso fica com 100
  width: min(601px, 100%);
  //media para fazer a responsividade, apartir de 500
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

//Position sticky é para ele ficar fixo
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  
  //com o @media que vamos controlar o lance do tamanho da tela, ali esta, apartir de 500 px, vai setar as configs:
  @media (min-width: 500px) {
    display: none;
  }
`;

//Um CSS para todos o icons de uma vez
//e chama ele dentro de cada um dos icons
const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;