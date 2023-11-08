import { StyleProps } from "@/components/Button/styles";
import theme from "@/theme";
import Link from "next/link";
import styled from "styled-components";

interface NavBarProps {
  isCurrentPath: boolean;
  variant: StyleProps;
}

export const StyledLink = styled(Link)<NavBarProps>`
  color: ${({ isCurrentPath, variant }) =>
    isCurrentPath
      ? variant === "primary"
        ? `${theme.COLORS.GREEN}`
        : `${theme.COLORS.BLACK}`
      : `${theme.COLORS.BLACK}`};

  text-decoration: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: ${({ isCurrentPath, variant }) =>
    isCurrentPath
      ? variant === "primary"
        ? "700"
        : "700"
      : variant !== "primary"
      ? "400"
      : "700"};
  line-height: normal;

  &:hover {
    opacity: 0.8;
  }
`;
