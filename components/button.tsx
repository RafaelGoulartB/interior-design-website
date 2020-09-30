import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/core'

const Button: React.FC = ({ children }) => {
  return (
    <ChakraButton
      variantColor="orange"
      color="white"
      textTransform="uppercase"
      width="fit-content"
    >
      {children}
    </ChakraButton>
  )
}

export default Button
