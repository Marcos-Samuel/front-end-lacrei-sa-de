import Image from "next/image";
import { Container } from "./styles";
import Link from "next/link";

export default function Socialcons() {
  return (
    <Container>
      <Link target="_blank" href={"https://www.facebook.com/lacrei.saude"}>
        <Image
          src={"/images/facebook-logo.svg"}
          alt="Icone do facebook, clicavel que redireciona para o facebook da pagina"
          width={32}
          height={32}
        />
      </Link>
      <Link target="_blank" href={"https://www.instagram.com/lacrei.saude/"}>
        <Image
          src={"/images/instagram-logo.svg"}
          alt="Icone do instagram, clicavel que redireciona para o instagram da pagina"
          width={32}
          height={32}
        />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/company/lacrei-saude/"}
      >
        <Image
          src={"/images/linkedin-logo.svg"}
          alt="Icone do linkedin, clicavel que redireciona para o linkedin da pagina"
          width={32}
          height={32}
        />
      </Link>
    </Container>
  );
}
