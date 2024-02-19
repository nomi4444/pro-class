// ThreeCards.jsx

import React from 'react';
import SingleCard from './Singlecard';
import './Threecards.css';

const ThreeCards = () => {
  return (
    <div className="cards-container">
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
}

export default ThreeCards;
