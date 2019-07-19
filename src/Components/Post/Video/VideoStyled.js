import styled from 'styled-components';
import { Palette } from "../../../Palette";

const VideoDiv = styled.div`
  background: ${Palette.secondary.dark};
  width: 99%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 90%;
`;

export { VideoDiv, Image };