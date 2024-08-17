import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
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
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="img/favicon.png" />
          <link rel="apple-touch-icon" href="img/favicon.png" />

          <title>Grazi Gomes</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#f2f3f5" />
          <title>Psicóloga &amp; Terapia online | Graziela Gomes</title>
          <meta
            name="description"
            content="Psicóloga | Terapia online."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
          <link rel="canonical" href="https://psigrazigomes.com/" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Psicóloga &amp; Terapia online | Graziela Gomes"
          />
          <meta
            property="og:description"
            content="Psicóloga SP | Terapia online."
          />
          <meta property="og:url" content="https://psigrazigomes.com/" />
          <meta
            property="og:site_name"
            content="Psicóloga SP | Terapia Online"
          />
          <meta
            property="og:image"
            content="https://psigrazigomes.com/_next/image?url=%2Fimages%2FLogo.png&w=1920&q=75"
          />
          <meta
            property="og:image:secure_url"
            content="https://psigrazigomes.com/_next/image?url=%2Fimages%2Fbanner.jpg&w=1920&q=75"
          />
          <meta property="og:image:width" content="1900" />
          <meta property="og:image:height" content="576" />
          <meta
            property="og:image:alt"
            content="Consultório Psicóloga Graziela Gomes."
          />
          <meta property="og:image:type" content="image/jpeg" />


          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5KQT6NB7DK"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5KQT6NB7DK', { page_path: window.location.pathname,});`,
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
