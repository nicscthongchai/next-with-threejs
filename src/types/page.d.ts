import React, {
  ComponentType,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react';
import { NextPage } from 'next';

export type Page<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  Layout?: ComponentType<any> | React.FC<any> | FunctionComponent;
  getLayout?: (page: ReactElement) => ReactElement<any, any>;
};
