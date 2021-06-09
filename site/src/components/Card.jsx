import React, { Component } from "react";

const Card = () => {
  return (
    <a>
      <div className="Cards">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbonjournature.fr%2Fwp-content%2Fuploads%2Fimage-de-paysage-colore.jpg&f=1&nofb=1"
          alt="image"
          className="CardImage"
        />
        <div className="CardTitle">
          <h1>Title</h1>
        </div>
      </div>
    </a>
  );
};

export default Card;
