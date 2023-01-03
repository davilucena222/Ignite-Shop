import { Handbag } from "phosphor-react";
import { ComponentProps } from "react";
import { CartButtonContainer } from "./styles";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export default function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      <Handbag weight="bold" width={24} height={24} fontSize={24} />
    </CartButtonContainer>
  );
}