import React from "react";
import "./host.css";

const HostForm = () => {
  return (
    <form>
      <div className="host-registeration">
        <div className="host-registeration">
          <label>logo</label>
          <input type="file" />
        </div>
        <div className="host-registeration">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="host-registeration">
          <label>description</label>
          <input type="text" />
        </div>
        <div className="host-registeration">
          <label>External funding history</label>
          <input type="text" />
        </div>
        <div className="host-registeration">
          <label>category</label>
          <input type="select" />
        </div>
        <div className="host-registeration">
          <label>initial round funding amount</label>
          <input type="number" min="1000" step="100" />
        </div>
        <div className="host-registeration">
          <label>epoch number</label>
          <input type="range" min="1" max="20" step="1" />
        </div>
        <div className="host-registeration">
          <label>epoch length(days)</label>
          <input type="number" max="40" min="1" step="1" />
        </div>
        <div className="host-registeration">
          <label>Set Goal for each epoch</label>
          <input type="text" />
        </div>
        <div className="host-registeration">
          <label>Target vulnerabilities in scope</label>
          <input type="file" />
        </div>
      </div>
      <div className="host-registeration-action">
        <button type="submit">Start Errata</button>
      </div>
    </form>
  );
};

export default HostForm;
