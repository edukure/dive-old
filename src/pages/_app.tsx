import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as AuthProvider } from 'next-auth/client';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
