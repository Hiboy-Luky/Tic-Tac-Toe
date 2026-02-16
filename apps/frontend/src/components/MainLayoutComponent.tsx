import React, {type ReactNode } from 'react';
import {AppShell} from '@mantine/core';
import type {MantineSpacing} from "@mantine/core";


interface MainLayoutProps {
    children: ReactNode;
    header?: ReactNode;
    navbar?: ReactNode;
    footer?: ReactNode;
    padding?: MantineSpacing;
}

const MainLayoutComponent: React.FC<MainLayoutProps> = ({
                                                            children,
                                                            header,
                                                            navbar,
                                                            footer,
                                                            padding = 'md',
                                                        }) => {
    return (
        <AppShell
            padding={padding}
            navbar={navbar ? { width: { base: 200 }, breakpoint: 'sm' } : undefined}
            header={header ? { height: 60 } : undefined}
            footer={footer ? { height: 60 } : undefined}
        >
            {header && <AppShell.Header>{header}</AppShell.Header>}
            {navbar && <AppShell.Navbar>{navbar}</AppShell.Navbar>}

            <AppShell.Main>
                    {children}
            </AppShell.Main>

            {footer && <AppShell.Footer>{footer}</AppShell.Footer>}

        </AppShell>
    );
};

export default MainLayoutComponent;