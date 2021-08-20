import { signIn } from 'next-auth/client';
import { Lottie } from '@crello/react-lottie';

import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Container, Flex, Text, VStack } from '@chakra-ui/layout';

import GithubIcon from '../Icons/GitHubIcon';

// https://lottiefiles.com/63599-balaton-wave-2#
import wavesAnimation from './animations/waves-light-blue.json';

const SignInModal = () => {
return (
    <Flex
      alignItems={{ base: 'start', sm: 'center' }}
      w="100%"
      justify="center"
      flex={1}
      bgGradient="linear(to-b, alura.light-blue, alura.dark-blue)"
    >
      <Flex
          rounded="lg"  
          w={{ base: '100%', sm: 'auto' }}
          position="relative"
          background="alura.blue"
          overflow="hidden"
          >
        <Lottie
          height="480px"
          width="480px"
          style={{
            position: 'absolute',
            bottom: '0',
            top: '0',
            left: '-50px',
            transform: 'rotate(180deg)',
          }}
          config={{ animationData: wavesAnimation, loop: true, autoplay: true }}
        />
        <Container textAlign="center" maxW="container.sm">
          <VStack
            alignItems="center"
            justify="center"
            flexDirection="column"
            spacing={8}
            h="full"
            p={12}
          >
            <Image src="/logo-rounded.png" w={'180px'} />
            <Image src="/dive-text.svg" w={'180px'} />

            <Text color="white" zIndex={10}>
              Mergulhe no mundo dos Scubas!{' '}
            </Text>
            <VStack spacing={2}>
              <Button
                leftIcon={<GithubIcon />}
                background={'alura.blue'}
                color="white"
                _hover={{ opacity: 0.8 }}
                fontWeight="normal"
                onClick={() => signIn('github')}
              >
                entrar com GitHub
              </Button>
              {/* <Button variant="ghost" fontWeight="normal" color="gray.300">
                entrar como visitante
              </Button> */}
            </VStack>
          </VStack>
        </Container>
      </Flex>
    </Flex>
  );
};

export default SignInModal;
