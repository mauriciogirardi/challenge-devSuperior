import { Container, SimpleGrid } from "@chakra-ui/react";
import { CardCar } from "components/CardCar";

import { Header } from "components/Header";
import { Search } from "components/Search";

export default function Catalog() {
    return (
        <>
            <Header />

            <Container maxW='container.lg' as="main" my="5">
                <Search />


                <SimpleGrid mt="5" minChildWidth={['300px']} spacing="45px">
                    <CardCar />
                    <CardCar />
                    <CardCar />
                    <CardCar />
                    <CardCar />
                    <CardCar />
                </SimpleGrid>

            </Container>
        </>
    )
}