import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

import carroPng from 'assets/images/car02.png';
import { Header } from "components/Header";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header />

            <Container maxW='container.lg' as="main" my="5">
                <Flex
                    flexDir={["column", "column", "row-reverse"]}
                    px={["6", "6", "4rem"]}
                    borderRadius="10px"
                    boxShadow="md"
                    bg="blue.800"
                    py="4rem"
                >
                    <Flex
                        justify={["center", "center", "right"]}
                        w={["100%", "100%", "40%"]}
                    >
                        <Image w={["244px", "333px"]} src={carroPng} alt="Carro" objectFit="contain" />
                    </Flex>

                    <Flex
                        align={["center", "center", "flex-start"]}
                        w={["100%", "100%", "60%"]}
                        justify={["center"]}
                        flexDir="column"
                        color="white"
                        mt="5"
                    >
                        <Heading textAlign={["center", "center", "left"]} >O carro perfeito para você</Heading>
                        <Text
                            textAlign={["center", "center", "left"]}
                            w={["250px", "300px", "400px"]}
                            fontSize={["14", "17", "18"]}
                            mt="2"
                        >
                            Conheça nossos carros e dê mais um passo
                            na realização do seu sonho
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    flexDir={["column", "column", "row"]}
                    justify={["center"]}
                    align={["center"]}
                    bg="gray.100"
                    mt="5"
                    p="10"
                >
                    <Link to="/catalog">
                        <Box
                            _hover={{ bg: "blue.700" }}
                            transitionDuration="0.2s"
                            borderRadius="8px"
                            bg="blue.800"
                            color="white"
                            py="2"
                            px="10"
                        >
                            <Text fontSize="15" fontWeight={500}>VER CATÁLAGO</Text>
                        </Box>
                    </Link>

                    <Text
                        mt={["3", "3", "0"]}
                        ml={["0", "0", "4"]}
                        fontSize="21"
                    >
                        Comece agora a navegar
                    </Text>
                </Flex>
            </Container>
        </>
    )
}
