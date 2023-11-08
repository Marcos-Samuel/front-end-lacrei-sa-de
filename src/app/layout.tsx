/* eslint-disable @next/next/no-page-custom-font */
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Layout } from "@/components/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  description:
    "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.",
  title: {
    default: "Home",
    template: "%s | Desafio Lacrei",
  },
  icons: "./images/icon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="./images/icon.svg" sizes="any" />
      </Head>
      <StyledComponentsRegistry>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </StyledComponentsRegistry>
    </html>
  );
}
