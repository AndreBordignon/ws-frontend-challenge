import React from "react";

import { Container, Icon } from "./styles";
import search from "../../assets/img/icons/search.png";

function SideMenu({ menuOpen }) {
  return (
    <Container menuOpen={menuOpen}>
      <Icon src={search} alt="pesquisar" />
      <Icon src={search} alt="pesquisar" />
      <Icon src={search} alt="pesquisar" />
      <Icon src={search} alt="pesquisar" />
      <Icon src={search} alt="pesquisar" />
    </Container>
  );
}

export default SideMenu;
