import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import Menu from '../components/Menu';
import SignInModal from '../components/SignInModal';

const Index = ({ session }) => {
  return (
    <Container minHeight="100vh">
      {!session ? (
        <SignInModal />
      ) : (
        <>
          <Menu />
          <Main flex={1}>
            <Text>
              Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
              <Code>typescript</Code>.
            </Text>

            <List spacing={3} my={0}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
                  Chakra UI <LinkIcon />
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
                  Next.js <LinkIcon />
                </ChakraLink>
              </ListItem>
            </List>
          </Main>
          <Footer>
            <Text>Feito com ❤️ pelo ScubaTeam</Text>
          </Footer>
        </>
      )}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};

export default Index;
