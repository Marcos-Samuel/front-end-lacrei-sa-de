import { StyleProps } from "../CustomButton/styles";
import ActivLink from "./ActiveLink/ActiveLink";
import * as S from "./styles";

interface NavProps {
  variant: StyleProps;
}

export default function Navbar({ variant }: NavProps) {
  return (
    <S.NavbarContainer>
      <S.NavList variant={variant}>
        <S.NavItem>
          <ActivLink variant={variant} href="/">
            Home
          </ActivLink>
        </S.NavItem>
        <S.NavItem>
          <ActivLink variant={variant} href="/pessoa-usuaria">
            Pessoa Usuária
          </ActivLink>
        </S.NavItem>
        <S.NavItem>
          <ActivLink variant={variant} href="/profissional">
            Profissional
          </ActivLink>
        </S.NavItem>
      </S.NavList>
    </S.NavbarContainer>
  );
}
