import { Text, Link as ChakraLink, LinkProps } from '@chakra-ui/react';

import { ActiveLink } from './ActiveLink';

interface NavLinkProps extends LinkProps {
    title: string;
    href: string;
}

export function NavLink({ title, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href}>
            <ChakraLink
                as="div"
                display="flex"
                align="center"
                _hover={{ color: 'blue.700' }}
                {...rest}
            >
                <Text ml="4" color="blue.800">
                    {title}
                </Text>
            </ChakraLink>
        </ActiveLink>
    );
}