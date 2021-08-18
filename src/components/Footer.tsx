import { Flex, FlexProps } from '@chakra-ui/react';

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    py="4"
    background="alura.dark-blue"
    w="full"
    justify="center"
    color="white"
    {...props}
  />
);
