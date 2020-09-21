import React from "react";

import {
  Container,
  BoxInfos,
  BoxTitle,
  Avatar,
  BoxUserInfo,
  UserCard,
  UserName,
  Corporation,
  UserStatus,
  IconBox,
  BoxIconText,
} from "./styles";

import mail from "../../assets/img/icons/email.png";
import cellphone from "../../assets/img/icons/phone.png";
import avatar from "../../assets/img/avatar.png";
import services from "../../services/services.json";
import { formatPhone } from "../../utils/format";
const UserInfos = () => {
  const { username, phone, status, email, company } = services;

  return (
    <Container>
      <BoxInfos>
        <BoxTitle>Informações Gerais</BoxTitle>

        <UserCard>
          <Avatar src={avatar} />
          <BoxUserInfo>
            <UserName>{username}</UserName>
            <Corporation>{company}</Corporation>
            <UserStatus status={status}>{status}</UserStatus>
          </BoxUserInfo>
        </UserCard>

        <IconBox>
          <img src={cellphone} alt="phone" />
          <BoxIconText>
            <Corporation>{formatPhone(phone)}</Corporation>
            <Corporation>Celular</Corporation>
          </BoxIconText>
        </IconBox>

        <IconBox>
          <img src={mail} alt="phone" />
          <BoxIconText>
            <Corporation>{email}</Corporation>
            <Corporation>Trabalho</Corporation>
          </BoxIconText>
        </IconBox>
      </BoxInfos>
    </Container>
  );
};

export default UserInfos;
