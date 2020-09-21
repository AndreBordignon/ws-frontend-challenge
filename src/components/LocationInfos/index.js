import React from "react";
import MapView from "../MapView";

import { Container, BoxInfos, BoxTitle } from "./styles.js";
import services from "../../services/services.json";

const LocationInfo = () => {
  const { location } = services,
    { latitude, longitude, address } = location;
  return (
    <Container>
      <BoxInfos>
        <BoxTitle>Localização</BoxTitle>
        <MapView lat={latitude} lng={longitude} />
      </BoxInfos>
    </Container>
  );
};

export default LocationInfo;
