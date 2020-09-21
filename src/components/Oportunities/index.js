import React from "react";

import {
  Container,
  BoxInfos,
  BoxTitle,
  BoxOportunitie,
  NumberBox,
  Number,
  InfoBox,
  TitleType,
  MoneyText,
} from "./styles.js";

import services from "../../services/services.json";
import { formatMoney } from "../../utils/format";

const Oportunities = () => {
  const { oportunities } = services,
    { won, open, lost, discard } = oportunities;
  return (
    <Container>
      <BoxInfos>
        <BoxTitle>Oportunidades</BoxTitle>
        <BoxOportunitie>
          <NumberBox color="#438846">
            <Number>{won.quantity}</Number>
          </NumberBox>
          <InfoBox>
            <TitleType>Ganhos</TitleType>
            <MoneyText>{formatMoney(won.value)}</MoneyText>
          </InfoBox>

          <NumberBox color="#c02a2e">
            <Number>{lost.quantity}</Number>
          </NumberBox>
          <InfoBox>
            <TitleType>Perdas</TitleType>
            <MoneyText>{formatMoney(lost.value)}</MoneyText>
          </InfoBox>
        </BoxOportunitie>

        <BoxOportunitie></BoxOportunitie>

        <BoxOportunitie>
          <NumberBox color="#3970d0">
            <Number>{open.quantity}</Number>
          </NumberBox>
          <InfoBox>
            <TitleType>Abertas</TitleType>
            <MoneyText>{formatMoney(open.value)}</MoneyText>
          </InfoBox>

          <NumberBox color="#444">
            <Number>{discard.quantity}</Number>
          </NumberBox>
          <InfoBox>
            <TitleType>Descartadas</TitleType>
            <MoneyText>{formatMoney(discard.value)}</MoneyText>
          </InfoBox>
        </BoxOportunitie>
      </BoxInfos>
    </Container>
  );
};

export default Oportunities;
