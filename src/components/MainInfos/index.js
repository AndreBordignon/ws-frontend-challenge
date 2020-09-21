import React from "react";

import { Container, Row } from "./styles";
import UserInfo from "../UserInfos";
import CreditCardInfo from "../CreditCardInfo";
import LocationInfo from "../LocationInfos";
import Oportunities from "../Oportunities";

const MainInfos = (props) => {
  const { menuOpen } = props;
  return (
    <Container open={menuOpen}>
      <Row>
        <UserInfo />
        <CreditCardInfo />
        <Oportunities />
      </Row>

      <Row>
        <LocationInfo />
      </Row>
    </Container>
  );
};

export default MainInfos;
