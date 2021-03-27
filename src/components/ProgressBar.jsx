import React from "react";

function ProgressBar(props) {
  const container = props.id1;
  return (
    <div className="progress">
      <div className="progress-highlight" id="bar-highlight">
        {console.log(container)}
      </div>
    </div>
  );
}

export default ProgressBar;
