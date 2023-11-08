import * as S from "./styles";

type Props = {
  title: string;
  variant: S.StyleProps;
  url: string;
};

export default function Button({
  variant = "primary",
  title,
  url,
  ...rest
}: Props) {
  return (
    <>
      <S.LinkStyle href={url}>
        <S.Button variant={variant} {...rest}>
          {title}
        </S.Button>
      </S.LinkStyle>
    </>
  );
}
