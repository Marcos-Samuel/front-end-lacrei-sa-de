import styled from "styled-components";
import { StyleProps } from "../CustomButton/styles";
import Link from "next/link";

type NavListProps = {
  variant: StyleProps;
};

export const NavbarContainer = styled.nav`
  width: 20.4rem;
  display: flex;
`;

export const NavList = styled.ul<NavListProps>`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: ${({ variant }) =>
      variant === "primary" ? "row" : "column"};
  }
`;

export const NavItem = styled.li`
  margin-right: 15px;
`;

export const StyledLink = styled(Link)`
  color: #1f1f1f;
  text-decoration: none;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    color: #018762;
  }
`;
