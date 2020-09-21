import styled from "styled-components";

export const Container = styled.div`
  margin-left: ${(props) => (props.open ? "60px" : "0px")};
  transition: 0.3s ease-in;
`;
export const Row = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
`;
