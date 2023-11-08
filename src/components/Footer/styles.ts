import theme from "@/theme";
import styled from "styled-components";

export const Container = styled.footer`
  height: 10rem;
  padding: 0.5rem 4rem;
  margin-top: 4rem;
  gap: 1rem;

  padding-top: 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 520px) {
    height: 6rem;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  border-top: 1px solid ${theme.COLORS.LIGTH_GREEN};
`;

export const Text = styled.span`
  color: ${theme.COLORS.GRAY};

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Nunito;
`;
