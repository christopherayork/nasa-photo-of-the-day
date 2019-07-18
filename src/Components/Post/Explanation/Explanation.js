import React from 'react';
import ExpDiv from './ExplanationStyled';

function Explanation(props) {
  let text = props.text;

  return (
      <ExpDiv>
        <p>{text}</p>
      </ExpDiv>
  );
}

export default Explanation;