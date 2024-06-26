import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to Our Website</Text>
        <Text fontSize="2xl">Explore our content and learn more about us.</Text>
      </VStack>
    </Container>
  );
};

export default Index;