import "nprogress/nprogress.css";
import "../styles/fonts.css";
import "@mantine/core/styles.css";
import {
  AppContainer,
  BasicStyles,
  ViewContainer,
} from "../styles/basicStyles";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import { MantineProvider } from "@mantine/core";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import Theme from "../styles/theme";
import Header from "../components/header";
import Footer from "../components/footer";
import type { AppProps } from "next/app";
import Context from "../context/context";

Router.events.on("routeChangeStart", (_: any, { shallow }: any) => {
  if (!shallow) {
    NProgress.start();
  }
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface InnerAppProps extends AppProps {
  appProps?: {
    success: boolean;
  };
}

const InnerApp = (props: InnerAppProps) => {
  const { Component, pageProps, appProps, router } = props;

  return (
    <AppContainer>
      <Header />
      <ViewContainer>
        <Component {...pageProps} />
        <Footer />
      </ViewContainer>
    </AppContainer>
  );
};

const AppWrapper = (props: InnerAppProps) => {
  return (
    // <MantineProvider withGlobalStyles withNormalizeCSS>
    <MantineProvider>
      <ThemeProvider theme={Theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <InnerApp {...props} />
        <BasicStyles />
      </ThemeProvider>
    </MantineProvider>
  );
};

const App = (props: AppProps) => {
  return (
    <Context>
      <AppWrapper {...props} />
    </Context>
  );
};

export default appWithTranslation(App);
