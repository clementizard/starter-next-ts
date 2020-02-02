import React from 'react';
import { AppContext } from 'next/app';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/react-hooks';
import { PageTransition } from 'next-page-transitions';

import { MediaContextProvider } from 'Styles/Media';
import GlobalStyles from 'Styles/GlobalStyle';
import { StatusProvider } from 'Services/Status';
import { withApollo } from 'Services/apollo';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

const ContextProviders = ({ children, apollo }: any) => (
  <MediaContextProvider>
    <ApolloProvider client={apollo}>
      <StatusProvider>{children}</StatusProvider>
    </ApolloProvider>
  </MediaContextProvider>
);

function MyApp({ Component, pageProps, apollo }: any) {
  const router = useRouter();
  const width = process.browser ? window.innerWidth : undefined;
  const height = process.browser ? window.innerHeight : undefined;
  const getLayout = Component.getLayout || ((page: any) => page);

  return [
    <GlobalStyles key="styles" width={width} height={height} />,
    <ContextProviders key="contexts" apollo={apollo}>
      {getLayout(
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>,
      )}
    </ContextProviders>,
  ];
}
MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

// @ts-ignore
export default withApollo(MyApp);
