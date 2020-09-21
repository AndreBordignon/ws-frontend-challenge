import React from "react";
import MapView from "./MapView";

import {
  Container,
  BoxInfos,
  BoxTitle,
  MapInfo,
  BoxMapInfo,
  Address,
  AddressName,
} from "./styles.js";
import services from "../../services/services.json";
import placeholder from "../../assets/img/icons/placeholder.png";

const LocationInfo = () => {
  const { location } = services,
    { latitude, longitude, address } = location;
  return (
    <Container>
      <BoxInfos>
        <BoxTitle>Localização</BoxTitle>
        <MapView lat={latitude} lng={longitude} />
        <MapInfo>
          <img src={placeholder} alt="placeholder" />
          <BoxMapInfo>
            <Address>
              {address.street}, {address.number}
            </Address>
            <AddressName>{address.addressName}</AddressName>
          </BoxMapInfo>
        </MapInfo>
      </BoxInfos>
    </Container>
  );
};

export default LocationInfo;
