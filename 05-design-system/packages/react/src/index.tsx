import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  fontWeight: '$bold',
  color: '$white',
  border: 0,

  variants: {
    variant: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    variant: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
