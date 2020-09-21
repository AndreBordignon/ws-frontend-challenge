import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
const API_KEY = "AIzaSyCi_yGvhuZB5j4HOoIHU84pq5QAVWUrJsc";

const MapView = (props) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultZoom={18}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
      >
        <Marker lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default MapView;
