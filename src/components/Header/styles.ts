import theme from "@/theme";
import styled from "styled-components";

export const Conteiner = styled.header`
  height: 3.75rem;
  background-color: ${theme.COLORS.LIGTH_GRAY};
  padding: 0.5rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 520px) {
    width: 100%;
    height: 6rem;

    display: flex;
    flex-direction: column;
  }
`;
export const Content = styled.div``;

export const Title = styled.h1`
  color: ${theme.COLORS.GREEN};

  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0%;

  font-family: "Nunito";
`;
