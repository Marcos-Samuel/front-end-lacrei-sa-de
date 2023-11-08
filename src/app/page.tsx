import Button from "@/components/Button/CustomButton";
import MainCard from "@/components/MainCard/page";
import { Metadata } from "next";

const Content = {
  title: "Boas vindas a Lacrei Saúde",
  text: "Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+",
  src: "./images/home.svg",
};

export const metadata: Metadata = {
  title: "Home | Lacrei Saúde",
};
export default function Home() {
  return (
    <>
      <MainCard content={Content} border={false} />
    </>
  );
}
