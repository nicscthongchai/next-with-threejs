import { ReactNode } from 'react';

type DefaultLayoutProps = {
  children?: ReactNode;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
  const { children } = props;
  return <main>{children}</main>;
};

export default DefaultLayout;
