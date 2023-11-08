"use client";
import * as S from "./styles";
import Navbar from "@/components/Navbar/NavBar";

export default function Header() {
  return (
    <S.Conteiner>
      <S.Title>Lacrei</S.Title>
      <Navbar variant="primary" />
    </S.Conteiner>
  );
}
