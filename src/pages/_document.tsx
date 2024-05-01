import { ServerStyleSheet } from "styled-components";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static getInitialProps: any = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            const AppContent = App as any;

            return sheet.collectStyles(<AppContent {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        lang: ctx?.locale,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  };

  render() {
    const { lang }: any = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#191919" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <title>Miguel Pinto</title>
          <meta
            httpEquiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/manifest.json" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#191919"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Miguel pinto" />
          <meta property="twitter:card" content="summary_large_image" />

          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />

          <link
            href="https://use.typekit.net/gog3llk.css"
            rel="stylesheet"
          ></link>

          <link
            rel="preload"
            href="/fonts/Poppins-Thin.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-ExtraLight.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-SemiBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-ExtraBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Black.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
