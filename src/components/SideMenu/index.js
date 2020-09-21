import React, { useState } from "react";

import { Container, Icon, IconButton } from "./styles";
import SearchBox from "../SearchBox";
import search from "../../assets/img/icons/search.png";
import user from "../../assets/img/icons/user.svg";

function SideMenu({ menuOpen }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Container menuOpen={menuOpen}>
      <IconButton onClick={() => setSearchActive(!searchActive)}>
        <Icon src={search} alt="pesquisar" />
      </IconButton>
      <SearchBox searchActive={searchActive} />

      <IconButton>
        <Icon src={user} alt="userinfo" />
      </IconButton>
    </Container>
  );
}

export default SideMenu;
