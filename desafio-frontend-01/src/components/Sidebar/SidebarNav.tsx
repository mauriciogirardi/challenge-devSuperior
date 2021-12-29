import { Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';

export const SidebarNav = () => {
    return (
        <Stack spacing="5">
            <NavLink href="/" title="Home" />
            <NavLink href="/catalog" title="Catálago" />
        </Stack>
    );
};