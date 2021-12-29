import { Button, Flex, Input } from "@chakra-ui/react"

export const Search = () => {
    return (
        <Flex bg="gray.100" p="8" borderRadius="8px">
            <Input borderRadius=" 4px 0 0 4px" bg="white" variant='filled' placeholder="Digite sua busca" />
            <Button borderRadius=" 0 4px 4px 0" bg="blue.800" color="white" _hover={{ bg: 'blue.700' }}>Buscar</Button>
        </Flex>
    )
}