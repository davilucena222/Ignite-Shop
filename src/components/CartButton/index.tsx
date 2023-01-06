import { Handbag } from "phosphor-react";
import { ComponentProps, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartButtonContainer, CircleCount } from "./styles";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export default function CartButton({ value, ...props }: CartButtonProps) {
  const { cartItems } = useContext(CartContext);

  const cartItemsLength = cartItems.length;

  return (
    <CartButtonContainer {...props}>
      {value === "true" ? (
        <>
          {cartItemsLength > 0 ? (
            <>
              <CircleCount>{cartItemsLength}</CircleCount>
              <Handbag weight="bold" width={24} height={24} fontSize={24} />
            </>
          ) : (
            <Handbag weight="bold" width={24} height={24} fontSize={24} />
          )}
        </>
      ) : (
        <Handbag weight="bold" width={24} height={24} fontSize={24} />
      )}
    </CartButtonContainer>
  );
}