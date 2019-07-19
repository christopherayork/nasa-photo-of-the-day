import styled from 'styled-components';
import { Palette } from "./Palette";

export const AppDiv = styled.div`
  background: ${Palette.secondary.dark};
  width: 100%;
  height: ${window.innerHeight}px;
  color: ${Palette.secondary.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  font-family: 'PT Sans', serif;

`;