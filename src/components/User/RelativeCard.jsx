import React from 'react';
import telLogo from '../../img/tel.png';
import './MyRelatives.scss';

function RelativeCard({name, relation, phone, imgUrl, presentation}) {
  return (
    <div>
    <div className="pic">
      <img src={imgUrl} alt="" ></img>
    </div>
    <div className="contact-container">
      <div className="contact-name">
        <h2>{name}</h2>
        <h4>{relation}</h4>
      </div>
      <div className="logo-div">
        <a href={phone}>
          <img src={ telLogo } alt="tel"></img>
        </a>
      </div>
    </div>
    <div className="presentation">
      <p>{presentation}</p>
    </div>
    </div>
  )
}

export default RelativeCard;