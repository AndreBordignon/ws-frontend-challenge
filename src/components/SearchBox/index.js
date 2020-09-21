import React from "react";

import { Container, TextInput } from "./styles";

const SearchBox = (props) => {
  const { searchActive } = props;
  return (
    <Container searchActive={searchActive}>
      <TextInput type="text" placeholder="Pesquise aqui" />
    </Container>
  );
};

export default SearchBox;
