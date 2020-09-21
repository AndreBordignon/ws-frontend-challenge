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
  margin-bottom: 30px;
`;

export const CreditLimit = styled.p`
  font-weight: 700;
  color: #3c74d0;
`;

export const RemainingLimit = styled.p`
  font-weight: 700;
  color: #438846;
`;

export const DescriptionLimit = styled.p`
  font-size: 12px;
  margin-bottom: 30px;
  color: #333;
`;
