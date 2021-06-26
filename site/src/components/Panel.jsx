import React from "react";
const Panel = () => {
  return (
    <div className="panel-grid-item">
      {/*
       * TODO: Pull images from folder and dynamically set them to img tag
       */}
      <img
        src="https://cdn.shopify.com/s/files/1/0911/8940/articles/photo-1478760329108-5c3ed9d495a0_1750x.jpg?v=1585946939"
        alt=""
      />
      <div className="panel-item-title">
        <h1>History of Oceanography</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Panel;
