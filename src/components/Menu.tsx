import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Slide } from '@chakra-ui/react';
import { Flex, Box, HStack, VStack, Circle, Container, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useBreakpointValue, Button } from '@chakra-ui/react';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={toggle}
      color="alura.light-blue"
      order={0}
    >
      <Flex h={6} w={6} align="center" justify="center">
        {/* for some reason CloseIcon looks bigger than the hamburguer one */}
        {isOpen ? <CloseIcon h={4} w={4} /> : <HamburgerIcon h={6} w={6} />}
      </Flex>
    </Box>
  );
};

const Logo = () => {
  const src = useBreakpointValue({ base: '/logo.svg', md: '/logo-text-white.svg' });
  return <Image src={src} alt="Dive logo" h={8} order={1} />;
};

const Avatar = () => {
  const [session] = useSession();

  console.dir(session);
  return (
    <>
      {!session ? (
        <>
          <Button order={3} height={8} onClick={() => signIn('github')}>
            Entrar
          </Button>
        </>
      ) : (
        <Flex order={3}>
          <Button height={8} onClick={() => signOut()} marginRight={4}>
            Sair
          </Button>
          <Circle size={8} bg="alura.light-blue" overflow="hidden">
            <Image
              src={session.user.image}
              alt={`github profile picture of ${session.user.name}`}
            />
          </Circle>
        </Flex>
      )}
    </>
  );
};

interface MenuItemProps {
  item: MenuItem;
}

const Item = ({ item }: MenuItemProps) => {
  return (
    <Box
      rounded="md"
      width={{ base: '100%', md: 'auto' }}
      _hover={!item.isCurrentPage && { background: 'gray.600', color: 'white' }}
      py={{ base: 2, md: 1 }}
      px={4}
      cursor="pointer"
      background={item.isCurrentPage ? 'alura.blue' : ''}
      color={item.isCurrentPage ? 'white' : 'inherit'}
    >
      <Link href={item.to}>
        <Text as="a" display="block">
          {item.name}
        </Text>
      </Link>
    </Box>
  );
};

interface MenuItem {
  name: string;
  to: string;
  isCurrentPage: boolean;
}

const Menu = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!isMenuOpen);
  };

  const items: MenuItem[] = [
    {
      name: 'forumzim',
      to: '/forumzim',
      isCurrentPage: true,
    },
    {
      name: 'IG-11',
      to: '/ig11',
      isCurrentPage: false,
    },
    {
      name: 'scubas',
      to: '/scubas',
      isCurrentPage: false,
    },
  ];

  return (
    <Box as="nav" w="100%" bg="alura.dark-blue" mb={8}>
      <Container maxW="container.lg">
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          py={2}
          px={4}
          color="gray.600"
          position="relative"
        >
          {/* Menu Button */}
          <MenuToggle toggle={toggleMenu} isOpen={isMenuOpen} />
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <HStack
            order={2}
            display={{ base: 'none', md: 'flex' }}
            spacing={4}
            align="center"
            flex={1}
            pl={8}
            justify={{ md: 'flex-start' }}
            fontWeight="semibold"
            color="gray.300"
          >
            {items.map((item) => (
              <Item item={item} />
            ))}
          </HStack>

          {/* Mobile Menu Dropdown*/}
          <Slide direction="top" in={isMenuOpen} style={{ zIndex: 10 }}>
            <Box
              p="4"
              w="full"
              bg="alura.dark-blue"
              shadow="md"
              visibility={{ base: isMenuOpen ? 'visible' : 'hidden', md: 'hidden' }}
              position="absolute"
              top="12"
              roundedBottom="lg"
            >
              <VStack
                order={4}
                w="100%"
                spacing={2}
                align="center"
                justify={{ base: 'center', md: 'flex-start' }}
                pt={2}
                fontWeight="semibold"
                color="gray.300"
              >
                {items.map((item) => (
                  <Item item={item} />
                ))}
              </VStack>
            </Box>
          </Slide>

          {/* Profile */}
          <Avatar />
        </Flex>
      </Container>
    </Box>
  );
};

export default Menu;
