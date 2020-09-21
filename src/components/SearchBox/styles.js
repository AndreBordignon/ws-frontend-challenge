import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.searchActive ? "flex" : "none")};
  position: ${(props) => (props.searchActive ? "absolute" : "none")};
  height: 100px;
  width: 250px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  left: 50px;
  top: 20px;
`;

export const TextInput = styled.input`
  height: 40px;
  width: 180px;
`;
