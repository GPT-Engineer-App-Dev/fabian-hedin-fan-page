import { Container, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">About Us</Text>
        <Text fontSize="2xl">We are a team of dedicated professionals committed to providing the best service.</Text>
      </VStack>
    </Container>
  );
};

export default About;