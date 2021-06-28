import React from "react";
import Panel from "./Panel";

const PanelGrid = () => {
  return (
    <div>
      <div class="panels-indent"></div>

      <div className="panel-grid">
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </div>
    </div>
  );
};

export default PanelGrid;
