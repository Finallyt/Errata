import React from "react";
import "./host.css";

const HostForm = () => {
  return (
    <form>
      <div className="host-registeration">
        <div className="host-registeration">
          <h4>Insert logo</h4>
          <input type="file" />
        </div>

        <div className="host-registeration">
          <h4>Type name</h4>
          <input type="text" />
        </div>

        <div className="host-registeration">
          <h4>Attach description file</h4>
          <input type="text" />
        </div>

        <div className="host-registeration">
          <h4>External funding history</h4>
          <input type="text" />
        </div>

        <div className="host-registeration">
          <h4>Choose category</h4>
          <input type="select" />
        </div>

        <div className="host-registeration">
          <h4>epoch number</h4>
          <input type="number" min="1" step="1" max="10" />
        </div>

        <div className="host-registeration">
          <h4>Epoch length</h4>
          <input type="number" max="40" min="1" step="1" />
          <label>(days)</label>
        </div>

        <div className="host-registeration">
          <h4>Goal for each epoch</h4>
          <input type="file" />
        </div>

        <div className="host-registeration">
          <h4>Target vulnerabilities in scope</h4>
          <input type="file" />
        </div>
      </div>

      <hr />
      <br />
      <div className="host-registeration-action">
        <button type="submit">Start Errata</button>
      </div>
    </form>
  );
};

export default HostForm;
