import Document, { Html, Head, Main, NextScript } from 'next/document'

const ga = process.env.NEXT_PUBLIC_GA

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {ga && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            />
          )}
          {ga && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga}');
          `,
              }}
            />
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Carter+One&text=Cody%20Olsen"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
