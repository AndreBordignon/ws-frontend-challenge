import React from "react";
import MapView from "../MapView";

import { Container, BoxInfos, BoxTitle } from "./styles.js";

const API_KEY = "AIzaSyCi_yGvhuZB5j4HOoIHU84pq5QAVWUrJsc";
const LocationInfo = () => {
  return (
    <Container>
      <BoxInfos>
        <BoxTitle>Localização</BoxTitle>
        <MapView
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={-24.9569075}
          lng={-53.4658602}
        />
      </BoxInfos>
    </Container>
  );
};

export default LocationInfo;
