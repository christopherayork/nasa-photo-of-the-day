import styled from 'styled-components';
import { Palette } from "../../Palette";

const HeaderStyled = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
  background: ${Palette.tertiary.dark};
  margin-bottom: 10px;
`;

const Logo = styled.div`
  padding: 5px;
  font-size: 2rem;
  
`;

const HeaderNav = styled.nav`
  background: ${Palette.tertiary.full};
  color: ${Palette.tertiary.light};
  width: 98%;
  height: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Anchor = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: ${Palette.tertiary.light};
`;

export { HeaderStyled, Logo, HeaderNav, Anchor };