import React, {Component} from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Pin from "./Pin";


class GoogleMap extends Component{
  static defaultProps = {
    center: {
      lat: 51.509865,
      lng: -0.118092
    },
    zoom: 5
  };

  render() {
    const { selectedCountry, pinData, onClickHandler } = this.props;
    return (
      <div className="mapContainer" style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: "AIzaSyCwO_zeKZ9hDaXiP-ZM_rrSC21X_0KoPe8"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {pinData.map((pin, i) => <Pin lat={pin.latitude} lng={pin.longitude} data={pin} selectedCountry={selectedCountry} onClickHandler={onClickHandler} key={i}/>)}
        </GoogleMapReact>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  selectedCountry: PropTypes.object.isRequired,
  pinData: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default GoogleMap;
