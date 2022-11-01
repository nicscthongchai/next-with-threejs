import nprogress from 'nprogress';
import { useEffect } from 'react';
import NoLayout from 'components/Layout/NoLayout';
import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Router from 'next/router';
import { Page } from 'types/page';
import isJSON from 'utils/is-json';
import pkg from '~/package.json';
import 'styles/global.scss';

Router.events.on('routeChangeStart', () => {
  nprogress.start();
});

Router.events.on('routeChangeError', () => {
  nprogress.done();
});

Router.events.on('routeChangeComplete', () => {
  nprogress.done();
});

const _App: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps & { Component: Page }
> = props => {
  const { Component, pageProps } = props;
  const enableServiceWorker = isJSON(
    process.env.NEXT_PUBLIC_ENABLE_SERVICE_WORKER
  )
    ? Boolean(JSON.parse(process.env.NEXT_PUBLIC_ENABLE_SERVICE_WORKER!))
    : false;

  useEffect(() => {
    if ('serviceWorker' in navigator && enableServiceWorker) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  }, []);

  const getLayout = Component.getLayout || (page => page);
  const Layout = Component.Layout || NoLayout;
  const appWithLayout = getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  return (
    <>
      <DefaultSeo
        defaultTitle={pkg.title}
        titleTemplate={`%s - ${pkg.title}`}
        description="Input your default website description here."
      />
      {appWithLayout}
    </>
  );
};

export default _App;
