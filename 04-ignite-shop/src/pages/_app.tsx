import { Roboto } from '@next/font/google';
import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import Image from 'next/image';


import logoSVG from '../assets/logo.svg';
import { Container, Header } from '../styles/pages/app';

globalStyles();
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoSVG} alt="" />
      </Header>

      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Container>
  )
}
