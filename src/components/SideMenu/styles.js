import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin-left: ${(props) => (props.menuOpen ? "0px" : "-100px")};
  transition: 0.3s ease-in;
  width: 50px;
  height: 100%;
  position: absolute;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 15px auto;
  display: flex;
`;
