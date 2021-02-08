import React from 'react';
import Head from 'next/head'

import { Backdrop, Container, Main } from './styles';

import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  title: string;
  href: string;
  backdrop?: boolean;
  onClick?(): void;
}

const Layout: React.FC<LayoutProps> = ({ 
  title, 
  href, 
  backdrop, 
  onClick, 
  children 
}) => {
  return (
    <Container>
      <Head>
        <title>WeatherApp | {title.toUpperCase()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header href={href} />
      <Main>
        {children}
      </Main>
      <Footer />

      <Backdrop backdrop={backdrop} onClick={() => onClick()} />
    </Container>
  )
}

export default Layout;
