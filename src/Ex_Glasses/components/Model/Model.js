import React from "react";
import "./Model.scss";

function Model({ selectGlasses }) {
  if (!selectGlasses) {
    return (
      <div className="model-container">
        <div className="left-modelImg">
          <div className="model">
            <img src="img/glassesImage/model.jpg" alt="Photo" />
          </div>
        </div>
        <div className="right-modelImg">
          <div className="model">
            <img src="img/glassesImage/model.jpg" alt="Photo" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="model-container">
      <div className="left-modelImg">
        <div className="model">
          <img src="img/glassesImage/model.jpg" alt="Photo" />
        </div>
        <div className="glasses-choose">
          <img src={`img/${selectGlasses.url}`} alt="Photo" />
        </div>
        <div className="content">
          {/* Header */}
          <div className="header">
            <h1 className="name">{selectGlasses.name}</h1>
            <p className="price">{selectGlasses.price} $</p>
          </div>
          {/* title */}
          <p className="desc">{selectGlasses.desc}</p>
        </div>
      </div>
      <div className="right-modelImg">
        <div className="model">
          <img src="img/glassesImage/model.jpg" alt="Photo" />
        </div>
        <div className="glasses-choose">
          <img src={`img/${selectGlasses.url}`} alt="Photo" />
        </div>
      </div>
    </div>
  );
}

export default Model;
