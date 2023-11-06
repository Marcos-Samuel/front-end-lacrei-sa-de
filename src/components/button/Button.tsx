"use client";
import * as S from "./styles";

type Props = {
  title: string;
  varient: S.StyleProps;
};

export default function Button({ varient = "primary", title, ...rest }: Props) {
  return (
    <>
      <S.Button varient={varient} {...rest}>
        {title}
      </S.Button>
    </>
  );
}
