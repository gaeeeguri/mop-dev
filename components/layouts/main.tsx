import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import React from 'react';
import { Router } from 'next/router';

export interface MainProps {
  children: React.ReactNode;
  router: Router;
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width initial-scale=1' />
        <meta name='description' content='2023 MOP Live Coding' />
        <meta name='author' content='Seongjin Park' />
        <meta name='author' content='gaeeeguri' />
        <title>MOP:DEV</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
