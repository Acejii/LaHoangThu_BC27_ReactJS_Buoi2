import React from "react";
import "./GlassItem.scss";
function GlassItem({ data, onSelect }) {
  const handleSelectClasses = (item) => {
    onSelect(item);
  };
  return (
    <div className="glassesDisplay">
      <div className="item-container">
        {data.map((item) => (
          <button
            key={item.id}
            className="item"
            onClick={() => handleSelectClasses(item)}
          >
            <img src={`img/${item.url}`} alt="photo" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default GlassItem;
