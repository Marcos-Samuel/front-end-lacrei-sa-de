import * as S from "./styles";
import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { StyleProps } from "../../Button/styles";

export type ActivLinkProps = {
  children: React.ReactNode;
  variant: StyleProps;
} & LinkProps;

export default function ActivLink({
  href,
  children,
  variant,
  ...rest
}: ActivLinkProps) {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as));

  return (
    <S.StyledLink
      isCurrentPath={isCurrentPath}
      {...rest}
      href={href}
      variant={variant}
    >
      {children}
    </S.StyledLink>
  );
}
