import React, { useState } from "react";

import HeaderBar from "../../components/HeaderBar";
import SideMenu from "../../components/SideMenu";
import MainInfos from "../../components/MainInfos";
import "../../styles/GlobalStyles.css";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <HeaderBar menuAction={toggleMenu} />
      <SideMenu menuOpen={menuOpen} />
      <MainInfos menuOpen={menuOpen} />
    </div>
  );
}

export default HomePage;
