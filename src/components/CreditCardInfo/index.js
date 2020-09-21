import React from "react";

import {
  Container,
  BoxInfos,
  BoxTitle,
  CreditLimit,
  RemainingLimit,
  DescriptionLimit,
} from "./styles";

import services from "../../services/services.json";
import { formatMoney } from "../../utils/format";

const CreditCardInfo = () => {
  const { creditCard } = services,
    { limit, remaining } = creditCard;

  return (
    <Container>
      <BoxInfos>
        <BoxTitle>Limite de crédito</BoxTitle>

        <CreditLimit>{formatMoney(limit)}</CreditLimit>
        <DescriptionLimit>Concedido</DescriptionLimit>

        <RemainingLimit>{formatMoney(remaining)}</RemainingLimit>
        <DescriptionLimit>Disponível</DescriptionLimit>
      </BoxInfos>
    </Container>
  );
};

export default CreditCardInfo;
