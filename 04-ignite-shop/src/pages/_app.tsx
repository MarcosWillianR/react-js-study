import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import Image from 'next/image';

import logoSVG from '../assets/logo.svg';

import { Container, Header } from '../styles/pages/app';
import { fontFamilyRoboto } from '../styles/global';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoSVG} alt="" />
      </Header>

      <div className={fontFamilyRoboto.className}>
        <Component {...pageProps} />
      </div>
    </Container>
  )
}
