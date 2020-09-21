import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 6px;
  align-items: center;
  margin: 10px;
  justify-content: center;
`;
export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;
export const BoxTitle = styled.h2`
  font-size: 16px;
  color: #333;
  margin-bottom: 30px;
`;
export const MapInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0 0;
  align-items: center;
  & img {
    width: 32px;
    height: 32px;
  }
`;
export const BoxMapInfo = styled.div`
  flex-direction: column;
  margin-left: 6px;
`;
export const Address = styled.p`
  color: #333;
  font-size: 14px;
`;
export const AddressName = styled.p`
  color: #333;
  font-size: 12px;
`;
