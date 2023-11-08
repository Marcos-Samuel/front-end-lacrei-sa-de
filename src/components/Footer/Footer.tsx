"use client";
import React from "react";
import * as S from "./styles";

import Socialcons from "./Socialcons/SocialIcons";
import Navbar from "../Navbar/NavBar";

export default function Footer() {
  return (
    <S.Container>
      <S.Content></S.Content>
      <Navbar variant="secondary" />
      <Socialcons />
      <S.Text>Desafio Front-end Lacrei</S.Text>
    </S.Container>
  );
}
