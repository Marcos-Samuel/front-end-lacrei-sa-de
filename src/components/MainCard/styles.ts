import theme from "@/theme";
import styled from "styled-components";

export type BorderProps = {
  border: boolean;
};

export const Container = styled.main`
  height: 100%;
  margin-top: 2rem;
  padding: 0.5rem 4rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 520px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentRigth = styled.div`
  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentLeft = styled.div`
  max-width: 540px;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1040px) {
    font-size: 2rem;
  }
`;
export const Text = styled.p<BorderProps>`
  width: 60%;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: ${theme.COLORS.GRAY};

  ${({ border }) =>
    border &&
    `
    border-left: 4px solid ${theme.COLORS.GREEN};
    padding-left: 2rem;
  `}

  @media (max-width: 1040px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const ContentText = styled.div<BorderProps>`
  word-wrap: break-word;
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
`;
