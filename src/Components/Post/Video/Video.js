import React from 'react';
import { VideoDiv, Image } from './VideoStyled';

function Video(props) {
  let url = props.url;
  let type = /youtube/i.exec(url); // Array or false

  return (
      <VideoDiv>
        {(() => {
          if(type) {
            return <iframe title={'IOTD'} width={'320'} height={'240'} src={url} frameBorder="0" allow={'autoplay'} allowFullScreen>
            </iframe>;
          }
          else return <Image src={url}/>;
        })()}
      </VideoDiv>
  );
}

export default Video;