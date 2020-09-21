import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 6px;
  align-items: center;
  margin: 10px;
  justify-content: center;
  max-height: 250px;
`;
export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const BoxTitle = styled.h2`
  font-size: 16px;
  color: #333;
`;
export const UserCard = styled.div`
  flex-direction: row;
  display: flex;
  padding: 20px;
`;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;
export const BoxUserInfo = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0px 15px;
`;
export const UserName = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #4e4e4e;
`;
export const Corporation = styled.span`
  font-size: 12px;
  color: #333;
`;
export const UserStatus = styled.p`
  font-size: 12px;
  background-color: #c7e6c8;
  font-weight: bold;
  color: #333;
  padding: 5px;
  text-align: center;
  border-radius: 4px;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
  align-items: center;
  & > img {
    width: 20px;
  }
`;
export const BoxIconText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;
