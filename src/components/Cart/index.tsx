import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import CartButton from "../CartButton";
import { CartClose, CartContent, CartProduct, ProductImage, CartFinalization, CartProductDetails, FinalizationDetails } from "./styles";

export default function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu carrinho está vazio!</p> */}

            <CartProduct>
              <ProductImage>
                <Image width={100} height={93} alt="" src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1673827200&Signature=TfdtdBNk~UUdHTUOH4G3vhM0cQ6kh9Mr2d2AlDt5H-52VpORpvabA7SvoBufxKvFr2YhuPc6CuEhkHCjgYAaJgYrXVVdwS-FGI3Cja0Yy3qdHby9sVibDvOjB2C8t8Kcg98edkYUDccwGB9Kt20ZEYKI2bJHezPVcWHL8R0toqmTIULFzYTshAn3YC-WcnUd~VytV8rwlRbyDIgbYNibh3hUmyBP5fhfnQjdyY1Iurdk21CR8S1O7kDq5Pfnpz3eabVw5zt31V8Eb8k-iOx9brOCueBLLD8pMJDmJ90RKTt~wwawOjzfLN1Ycu90rEqIPxUExThhj5B3rQYVSWP3TQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              </ProductImage>

              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 25,90</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>

              <div>
                <span>Valor total</span>
                <p>R$ 100.00</p>
              </div>
            </FinalizationDetails>

            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}