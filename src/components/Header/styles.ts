import theme from "@/theme";
import styled from "styled-components";

export const Conteiner = styled.header`
  width: 100%;
  height: 3.75rem;
  background-color: ${theme.COLORS.SECUNDARY_BACKGROUND};

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${theme.COLORS.PRIMARY};

  font-family: ${theme.FONTS.TEXT};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
