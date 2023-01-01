import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "./styles";

export default function CartButton() {
  return (
    <CartButtonContainer>
      <Handbag weight="bold" size={24} />
    </CartButtonContainer>
  );
}