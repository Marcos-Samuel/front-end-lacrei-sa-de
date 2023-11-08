"use client";
import Image from "next/image";
import * as S from "./styles";
import { usePathname } from "next/navigation";

import CustomButton from "../Button/CustomButton";

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
            <CustomButton
              title={"Pessoa Usuária"}
              variant={"primary"}
              url={"pessoa-usuaria"}
            />
            <CustomButton
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
