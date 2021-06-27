import React from "react";

const Card = () => {
  return (
    <a className="card">
      <img
        src="https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
