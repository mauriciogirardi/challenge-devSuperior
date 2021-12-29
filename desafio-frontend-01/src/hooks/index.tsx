import { ReactNode } from "react"

import { SidebarDrawerProvider } from './useSidebarDrawer'

type ProvidersProps = {
    children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <SidebarDrawerProvider>
            {children}
        </SidebarDrawerProvider>
    )
}