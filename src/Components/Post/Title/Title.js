import React from 'react';
import TitleStyled from './TitleStyled';

function Title(props) {
  let {title, date} = props;

  return (
    <TitleStyled>
      <p className={'title'}>{title}</p>
      <p className={'date'}>{date}</p>
    </TitleStyled>
  );
}

export default Title;
