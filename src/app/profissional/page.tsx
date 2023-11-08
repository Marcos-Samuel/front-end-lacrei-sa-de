import MainCard from "@/components/MainCard/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profissional",
};
const Content = {
  title: "Profissional",
  text: "Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+",
  src: "./images/profissional-1.svg",
};

export default function Profissional() {
  return (
    <>
      <MainCard content={Content} border={true} />
    </>
  );
}
