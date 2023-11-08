import theme from "@/theme";
import Link from "next/link";
import styled from "styled-components";

export type StyleProps = "primary" | "secondary";

interface ButtonProps {
  variant: StyleProps;
}

export const LinkStyle = styled(Link)`
  text-decoration: none;
`;
export const Button = styled.div<ButtonProps>`
  width: 12rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border-radius: 0.5rem;
  border: 2px solid ${theme.COLORS.GREEN};
  color: ${({ variant }) =>
    variant === "primary" ? `${theme.COLORS.WHITE}` : `${theme.COLORS.GREEN}`};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Nunito";
  ${({ variant }) =>
    variant === "primary" &&
    `
    background: ${theme.COLORS.GREEN};
    color: ${theme.COLORS.WHITE};
  `};
`;
