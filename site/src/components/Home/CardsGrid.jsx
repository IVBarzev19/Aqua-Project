import React from "react";
import Card from "./Card";

const CardsGrid = () => {
  return (
    <div>

      <div class="cards-indent"></div>

      <div className="card-back">
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="cards-indent-reversed"></div>

    </div>
  );
};

export default CardsGrid;
