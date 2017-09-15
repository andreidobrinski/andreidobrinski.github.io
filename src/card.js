import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: "left side",
      skill: "right side"
    }
  }

  render() {
    return (
      <div className="card">
        <div className="overlay">
          <div className="card-product">
            <p>{this.state.product}</p>
          </div>
          <div className="card-skill">
            <p>{this.state.skill}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;