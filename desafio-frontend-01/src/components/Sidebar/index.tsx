import {
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
} from '@chakra-ui/react';

import { useSidebarDrawer } from 'hooks/useSidebarDrawer';
import { SidebarNav } from './SidebarNav';

export const Sidebar = () => {
    const { isOpen, onClose } = useSidebarDrawer();

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg="orange.600" p="4">
                    <DrawerCloseButton mt="6" />
                    <DrawerHeader color="blue.800">Navegação</DrawerHeader>
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};