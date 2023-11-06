import styled, { css } from "styled-components";

export type StyleProps = "primary" | "secondary";

interface ButtonProps {
  varient: StyleProps;
}

export const Button = styled.button<ButtonProps>`
  width: 12rem;
  height: 3rem;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  background: transparent;
  border-radius: 0.5rem;
  border: 2px solid #018762;
  color: ${({ varient }) => (varient === "primary" ? "white" : "#018762")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  ${({ varient }) =>
    varient === "primary" &&
    `
    background: #018762;
    color: white;
  `}
`;

export const Container = styled.div`
  text-align: center;
`;
