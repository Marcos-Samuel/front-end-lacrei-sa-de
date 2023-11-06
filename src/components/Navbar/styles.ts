import Link from "next/link";
import styled from "styled-components";

export type NavProps = "active" | "desabled";

interface ButtonProps {
  varient: NavProps;
}

export const NavbarContainer = styled.nav`
  padding: 10;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
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
