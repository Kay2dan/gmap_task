import React, {Component} from "react";
import PropTypes from "prop-types";

class Pin extends Component{

	getRandomNumber = () => (
		Math.floor(Math.random() * 255) + 0
	);

	render(){
		const { data : { name }, onClickHandler, selectedCountry } = this.props;
		return(
			<div className={`pin ${selectedCountry === name ? "selected" : undefined}`}
				onClick={onClickHandler}
        data-name={name}
				style={{
					width: "10px",
					height: "10px",
					backgroundColor: "gold",
          cursor: "pointer",
					position: "absolute",
					top: "-6px",
					left: "-6px",
					borderRadius: "10px",
					border: "1px solid black",
					boxShadow: "0 0 2px gray",
				 }}/>
		);
	}
}

Pin.propTypes = {
  data : PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  selectedCountry: PropTypes.object.isRequired
}

export default Pin;
