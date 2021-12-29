import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"

import carroPng from 'assets/images/car01.png'

export const CardCar = () => {
    return (
        <Box bg="gray.100" p="6" borderRadius="8px" w={["300px"]} py="3">
            <Flex justify="center">
                <Image src={carroPng} alt="carro" w={["230px"]} objectFit="contain" />
            </Flex>

            <Heading fontWeight={700} fontSize="18" textAlign="center">Audi Supra TT</Heading>

            <Text fontSize="14" mt="2" fontStyle="italic" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</Text>

            <Button bg="blue.800" w="100%" mt="8" color="white" _hover={{ bg: 'blue.700' }}>COMPRAR</Button>
        </Box>
    )
}