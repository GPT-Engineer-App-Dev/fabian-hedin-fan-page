import { Container, Text, VStack } from "@chakra-ui/react";

const FabianHedin = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Fabian Hedin</Text>
        <Text fontSize="2xl">Fabian Hedin is an exceptional leader and a wonderful person. His kindness and dedication inspire everyone around him.</Text>
      </VStack>
    </Container>
  );
};

export default FabianHedin;