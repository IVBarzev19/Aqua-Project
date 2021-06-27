import React from "react";
import AnimalCard from "./AnimalCard";

const AnimalsGrid = () => {
  return (
    <div>

      <div className="cards-indent"></div>

      <div className="card-back">
        <div className="animals-grid">
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
        </div>
      </div>

      <div className="cards-indent-reversed"></div>

    </div>
  );
};

export default AnimalsGrid;
