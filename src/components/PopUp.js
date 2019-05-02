import React from "react";
import PropTypes from "prop-types";

const PopUp = ({ countryData,
    onClickHandler,
    selectedCountry }) => {
      const { clientX, clientY } = selectedCountry.position;
  return(
    <div className="popUp"
         onClick={onClickHandler}
         style={{
           backgroundColor: "rgba(255,255,255,0.7)",
           border: "1px solid black",
           borderRadius: "10px",
           cursor: "pointer",
           fontFamily: "sans-serif",
           position: "absolute",
           top: `${clientY}px`,
           left: `${clientX}px`,
           padding: "3px 5px",
           fontSize: "10px"
         }}>
      <div className="nameSection">{countryData.name}</div>
      <div className="capitalSection">{countryData.capital}</div>
    </div>
  );
};


export default PopUp;
