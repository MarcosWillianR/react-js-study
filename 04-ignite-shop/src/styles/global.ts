import { Roboto } from '@next/font/google';
import { globalCss } from ".";

export const fontFamilyRoboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: fontFamilyRoboto.style.fontFamily,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  }
})