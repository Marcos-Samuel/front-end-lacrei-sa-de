import theme from "@/theme";
import Link from "next/link";
import styled from "styled-components";

interface NavBarProps {
  isCurrentPath: boolean;
}

export const StyledLink = styled(Link)<NavBarProps>`
  color: ${({ isCurrentPath }) => (isCurrentPath ? "#018762" : "#1F1F1F")};
  text-decoration: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: ${theme.FONTS.TEXT};
  &:hover {
    color: #018762;
  }
`;
