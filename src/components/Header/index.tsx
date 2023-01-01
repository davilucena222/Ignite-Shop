import Image from "next/image";
import Link from "next/link";

import logoImg from "../../assets/logo.svg";
import Cart from "../Cart";

import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="Imagem svg do cabeçalho da aplicação" />
      </Link>

      <Cart />
    </HeaderContainer>
  );
}