import React, { ReactNode } from 'react';

type NoLayoutProps = { children: ReactNode };

export const NoLayout: React.FC<NoLayoutProps> = props => <>{props.children}</>;

export default NoLayout;
