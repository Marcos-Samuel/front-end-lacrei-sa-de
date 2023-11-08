import * as S from "./styles";

import "@fontsource/nunito";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <S.Container>{children}</S.Container>;
};
