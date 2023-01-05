import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartButton from "../CartButton";
import { CartClose, CartContent, CartProduct, ProductImage, CartFinalization, CartProductDetails, FinalizationDetails } from "./styles";
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartProps {
  product: Product;
}

export default function Cart({ product }: CartProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { cartItems, removeProductFromCart, totalPrice } = useContext(CartContext);
  const cartItemsLength = cartItems.length;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: cartItems, //enviando o id do preço do produto 
      });

      const { checkoutUrl } = response.data; //capturando o link de redirecionamento de compra

      window.location.href = checkoutUrl;
    } catch {
      // conectar com uma ferramenta de observabilidades (Datadog / Sentry)

      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!');
    }
  }

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
            {cartItemsLength <= 0 && <p>Seu carrinho está vázio, que pena!</p>}

            {cartItems.map(product => (
              <CartProduct key={product.id}>
                <ProductImage>
                  <Image width={100} height={93} alt="" src={product.imageUrl} />
                </ProductImage>

                <CartProductDetails>
                  <p>{product.name}</p>
                  <strong>{product.price}</strong>
                  <button onClick={() => removeProductFromCart(product.id)}>Remover</button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{cartItemsLength} {cartItemsLength === 1 ? "item" : "itens"}</p>
              </div>

              <div>
                <span>Valor total</span>
                <p>{formattedPrice}</p>
              </div>
            </FinalizationDetails>

            <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession || cartItemsLength <= 0}>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}