import styled from 'styled-components';
import { Palette } from '../../Palette';

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Palette.secondary.full};
  color: ${Palette.secondary.light};
  width: 100%;

`;

export default PostDiv;