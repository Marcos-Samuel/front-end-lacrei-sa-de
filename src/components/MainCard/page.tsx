"use client";
import Image, { ImageProps } from "next/image";
import * as S from "./styles";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

type MainType = {
  content: { title: string; text: string; src: string };
  border: boolean;
};

export default function MainCard({ content, border }: MainType) {
  const pathname = usePathname();

  return (
    <S.Container>
      <S.ContentRigth>
        <S.Title>{content.title}</S.Title>

        <S.Text border={border}>{content.text}</S.Text>

        {pathname === "/" && (
          <S.ContentButtons>
            <Button
              title={"Pessoa Usuária"}
              variant={"primary"}
              url={"pessoa-usuaria"}
            />
            <Button
              title={"Profissional"}
              variant={"secondary"}
              url={"profissional"}
            />
          </S.ContentButtons>
        )}
      </S.ContentRigth>
      <S.ContentLeft>
        <Image
          src={content.src}
          alt="imagem"
          width={555}
          height={441}
          layout="responsive"
        />
      </S.ContentLeft>
    </S.Container>
  );
}
