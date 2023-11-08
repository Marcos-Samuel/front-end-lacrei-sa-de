"use client";

import * as S from "./styles";
import Navbar from "@/components/Navbar/NavBar";

export default function Header() {
  return (
    <S.Conteiner>
      <S.LinkStyle href="/">
        <S.Title>Lacrei</S.Title>
      </S.LinkStyle>
      <Navbar variant="primary" />
    </S.Conteiner>
  );
}
