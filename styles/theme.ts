import { theme, DefaultTheme } from '@chakra-ui/core'

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Mukta, sans-serif",
    heading: "Mukta, sans-serif",
    mono: "Mukta, sans-serif",
  }
}

export default customTheme