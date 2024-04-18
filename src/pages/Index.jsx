// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Flex, Text, Image, VStack, Heading, SimpleGrid, useColorModeValue, Button, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product One",
    description: "This is a description of product one. It is a great product with many features.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwb25lfGVufDB8fHx8MTcxMzQxMjIxNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is a description of product two. It is an excellent choice for your needs.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdHdvfGVufDB8fHx8MTcxMzQxMjIxNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product Three",
    description: "This is a description of product three. Ideal for anyone looking for high quality.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdGhyZWV8ZW58MHx8fHwxNzEzNDEyMjE2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Product Four",
    description: "This is a description of product four. Top of the line product in its category.",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZm91cnxlbnwwfHx8fDE3MTM0MTIyMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} minH="100vh" p={5}>
      <VStack spacing={8}>
        <Heading color={color}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} bg="gray.700" color="white" borderRadius="lg" overflow="hidden" shadow="md">
              <Image src={product.image} alt={product.name} boxSize="100%" objectFit="cover" />
              <Flex p={5} flexDirection="column" justifyContent="space-between" h="100%">
                <VStack align="start" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text fontSize="md">{product.description}</Text>
                  <Text fontSize="lg" color="yellow.400">
                    {product.price}
                  </Text>
                </VStack>
                <Button leftIcon={<FaShoppingCart />} colorScheme="yellow" variant="solid" w="full" mt={4}>
                  Add to Cart
                </Button>
                <Link href="#" color="blue.400" mt={2} textAlign="center" w="full" display="block">
                  Buy Now
                </Link>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;
