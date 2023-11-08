import MainCard from "@/components/MainCard/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pessoa Usuária",
};

const Content = {
  title: "Pessoa Usuária",
  text: "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.",
  src: "./images/pessoa-usuaria.svg",
};

export default function User() {
  return (
    <main>
      <MainCard content={Content} border={true} />
    </main>
  );
}
