import React from "react";
import "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div сlassName="options">
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && <button onClick={onReset}>RESET</button>}
    </div>
  );
};

export default Options;
