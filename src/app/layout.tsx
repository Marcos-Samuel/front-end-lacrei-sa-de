import Header from "@/components/Header/Header";
import { Layout } from "@/components/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Boas Vindas a Lacrei Sáude",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Layout>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </Layout>
    </html>
  );
}
