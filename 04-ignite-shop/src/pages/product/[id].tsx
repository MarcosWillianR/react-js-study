import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem fugit sapiente quasi pariatur cupiditate saepe optio officiis itaque quas, excepturi temporibus non explicabo laboriosam maxime. Repudiandae ab magni deleniti velit.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}