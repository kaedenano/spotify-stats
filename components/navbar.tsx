import NextLink from 'next/link'
import {
  Text,
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const Navbar = () => {
  return (
      <HStack padding={4} spacing='4'>
        <Text paddingRight="30">Spotify Stats</Text>
        <Link href='./bt'>About</Link>
        <Link>Github</Link>
        <Link>Favorites</Link>
      </HStack>
  )
}

export default Navbar;