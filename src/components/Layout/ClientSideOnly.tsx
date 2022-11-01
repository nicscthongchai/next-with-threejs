import dynamic from 'next/dynamic';

export const ClientSideOnly = dynamic(() => import('./NoLayout'), {
  ssr: false,
});

export default ClientSideOnly;
