import React from 'react';

import starEmpty from '../star--empty.jpg';
import starFull from '../star--full.png';


export default function Star (props){
  let starIcon = props.isFilled? starFull : starEmpty;
  // let starIcon = contact.isFavorite? "star--full.jpg" : "star--empty.jpg"
  return(
    <div>
      <img
      src={starIcon}
      onClick={props.handleClick}
      alt="" />
      {/* /* <img src={`../${starIcon}`} alt=""/> */}
    </div>
  )
}
