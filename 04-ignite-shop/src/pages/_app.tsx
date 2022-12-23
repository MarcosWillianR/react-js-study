import { Roboto } from '@next/font/google';
import { AppProps } from 'next/app';

import { globalStyles } from '../styles/global';

globalStyles();

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
