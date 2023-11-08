import * as S from "./styles";

type ButtonProps = {
  title: string;
  variant: S.StyleProps;
  url: string;
};

export default function CustomButton({
  variant = "primary",
  title,
  url,
}: ButtonProps) {
  return (
    <>
      <S.LinkStyle href={url}>
        <S.Button variant={variant}>{title}</S.Button>
      </S.LinkStyle>
    </>
  );
}
