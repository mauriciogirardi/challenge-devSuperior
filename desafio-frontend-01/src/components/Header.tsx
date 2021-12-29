import { Flex, Heading, Container, Box, IconButton, Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from 'hooks/useSidebarDrawer';

export const Header = () => {
    const { onOpen, isOpen } = useSidebarDrawer();

    return (
        <Box bg="orange.600">
            <Container maxW='container.lg' as="header">
                <Flex pt="4" pb="3" justify="space-between">
                    <Heading color="blue.800" fontSize="2xl" fontWeight={700}>
                        <Link to="/">
                            Carros Top
                        </Link>
                    </Heading>

                    {!isOpen && (
                        <IconButton
                            aria-label="open navigation"
                            type="button"
                            color="blue.800"
                            onClick={onOpen}
                            variant="unstyled"
                            _hover={{ color: 'blue.900' }}
                            transitionDuration="0.2s"
                            icon={<Icon as={RiMenuLine} fontSize="28" />}
                        />
                    )}
                </Flex>
            </Container>
        </Box>
    )
}