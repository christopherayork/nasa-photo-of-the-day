import styled from 'styled-components';
import { Palette } from "../../../Palette";

const TitleStyled = styled.div`
  padding: 10px 20px;
  background: ${Palette.secondary.mid};
  color: ${Palette.secondary.light};
  display: flex;
  justify-content: space-between;
  width: 98%;

`;

export default TitleStyled;