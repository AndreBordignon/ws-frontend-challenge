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
export const BoxOportunitie = styled.div`
  display: flex;
  flex: 2;
  justify-content: left;
  margin-bottom: 30px;
`;
export const NumberBox = styled.div`
  display: flex;
  width: 15px;
  height: 20px;
  background-color: ${(props) => props.color};
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const Number = styled.span`
  color: #fff;
  font-size: 28px;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 70px;
`;
export const TitleType = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #333;
`;

export const MoneyText = styled.p`
  font-size: 14px;
  color: #333;
`;
