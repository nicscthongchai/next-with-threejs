import { NextComponentType } from 'next';
import {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

const NextDocument: NextComponentType<
  DocumentContext,
  DocumentInitialProps,
  DocumentProps
> = () => {
  const favicon = (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=1"
      />
      <link rel="manifest" href="/site.webmanifest?v=1" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#72421e" />
      <link rel="shortcut icon" href="/favicon.ico?v=1" />
      <meta name="apple-mobile-web-app-title" content="Speed Star" />
      <meta name="application-name" content="Speed Star" />
      <meta name="msapplication-TileColor" content="#fffdf2" />
      <meta name="theme-color" content="#fffdf2" />
    </>
  );
  const fonts = (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  );
  return (
    <Html lang="en-us">
      <Head>
        {favicon}
        {fonts}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default NextDocument;
