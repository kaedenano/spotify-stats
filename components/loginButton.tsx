import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Button } from '@chakra-ui/react'
import { motion } from "framer-motion";

const handleLogin = () => {
  signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const loginButton = () => {
  return (
    <Button
      onClick={handleLogin}
      fontSize="2xl"
      padding='8'
      margin='8'
      background='brand.100'
      rounded='full'
      color='white'>
      Login on Spotify
    </Button>
  )
}

export default loginButton;
