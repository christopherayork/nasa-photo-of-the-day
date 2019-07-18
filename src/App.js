import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Components/Header/Header.js';
import Post from './Components/Post/Post.js';
import { AppDiv } from './AppStyled.js';

const axios = require('axios');

let defAPI = 'https://api.nasa.gov/planetary/apod?api_key=a6Z08dmuQMoLhHUhLaKxFG754K77e09oX0Mnaom4';

function App() {

  let [API] = useState(defAPI);
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get(API)
        .then(res => {
          setContent(res);
        })
        .catch(e => {
          console.log(e);
        });
  }, [API]);

  return (
    <AppDiv>
      {/* We need a component for the header and post, with video title, video subcomponent, and explanation */}
      <Header />
      {content !== '' ? <Post promise={content} /> : <div>Loading...</div>}
    </AppDiv>
  );
}

export default App;
