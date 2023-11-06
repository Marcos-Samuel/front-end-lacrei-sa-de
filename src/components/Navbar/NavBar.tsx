import ActivLink from "../ActiveLink/ActiveLink";
import * as S from "./styles";

export default function Navbar() {
  return (
    <S.NavbarContainer>
      <S.NavList>
        <S.NavItem>
          <ActivLink href="/">Home</ActivLink>
        </S.NavItem>
        <S.NavItem>
          <ActivLink href="/pessoa-usuaria">Pessoa Usuária</ActivLink>
        </S.NavItem>
        <S.NavItem>
          <ActivLink href="/profissional">Profissional</ActivLink>
        </S.NavItem>
      </S.NavList>
    </S.NavbarContainer>
  );
}
