import React from "react";
import "./SkipCard.css";
import containerImage from "../container.jpg";

function SkipCard({ skip, isSelected, onSelect }) {
  const { size, hire_period_days, price_before_vat, vat, allowed_on_road } =
    skip;
  const totalPrice = (price_before_vat * (1 + vat / 100)).toFixed(0);

  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(isSelected ? null : skip)}
    >
      <div className="image-placeholder">
        <img src={containerImage} alt="container" className="container-image" />

        <div className="size-tag">{size} Yards</div>
        {!allowed_on_road && (
          <span className="warning">🚫 Not Allowed On The Road</span>
        )}
      </div>
      <h3>{size} Yard Skip</h3>
      <p>{hire_period_days} day hire period</p>
      <p className="price">£{totalPrice}</p>

      <button className="select-btn">
        {isSelected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
}

export default SkipCard;
