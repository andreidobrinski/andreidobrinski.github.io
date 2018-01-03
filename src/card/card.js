import React from 'react';
import './card.css';

const Card = (props) => (
  <div className="card" onClick={this.handleClick}>
    <div className="overlay">
      <div className="card-product">
        <p>{props.product}</p>
      </div>
      <div className="card-skill">
        <p>{props.skill}</p>
      </div>
    </div>
  </div>
);

export default Card;
