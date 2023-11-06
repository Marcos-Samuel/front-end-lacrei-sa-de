import * as S from "./styles";

import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type ActivLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export default function ActivLink({ href, children, ...rest }: ActivLinkProps) {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as));

  return (
    <S.StyledLink isCurrentPath={isCurrentPath} {...rest} href={href}>
      {children}
    </S.StyledLink>
  );
}
