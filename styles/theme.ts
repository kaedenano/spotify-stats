import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#1DB954"
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#181818",
        color: 'white'
      },
      html: {
       height: '100%'
     }
    }
  }
});