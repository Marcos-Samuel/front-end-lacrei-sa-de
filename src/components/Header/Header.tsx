"use client";
import * as S from "./styles";
import Navbar from "@/components/Navbar/NavBar";

export default function Header() {
  return (
    <S.Conteiner>
      <S.Content>
        <S.Title>Lacrei</S.Title>
        <Navbar />
      </S.Content>
    </S.Conteiner>
  );
}
