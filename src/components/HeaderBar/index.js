import React from "react";

import { Container } from "./styles";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

const HeaderBar = ({ menuAction }) => {
  return (
    <Container>
      <MenuIcon
        style={{ fill: "#FFFFFF", width: 25, height: 25 }}
        onClick={() => menuAction()}
      />
    </Container>
  );
};

export default HeaderBar;
