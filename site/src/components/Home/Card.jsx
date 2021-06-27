import React from "react";

const Card = () => {
  return (
    <a className="card">
      <img
        src="https://cdn.mos.cms.futurecdn.net/JKzM6jkUp72F2tLmLiLFQG-1200-80.jpg"
        alt="image"
      />
      <div className="card-title">
        <h1>Title</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </a>
  );
};

export default Card;