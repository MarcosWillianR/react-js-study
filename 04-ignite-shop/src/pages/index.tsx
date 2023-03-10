import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useKeenSlider } from 'keen-slider/react';
import Stripe from "stripe";

import { stripe } from "../lib/stripe";

import { HomeContainer, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products?.map(({ id, imageUrl, name, price }) => (
          <Link
            href={`/product/${id}`}
            key={id}
            className="keen-slider__slide"
            prefetch={false}
          >
            <Product>
              <Image src={imageUrl} alt={name} width={520} height={480} />

              <footer>
                <strong>{name}</strong>
                <span>{price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    const formattedPrice = (value: number) => new Intl.NumberFormat('pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    ).format(value);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice(price.unit_amount / 100)
    }
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // seconds
  }
}