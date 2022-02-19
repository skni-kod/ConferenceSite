import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    return await NextDocument.getInitialProps(context);
  }

  render() {
    return (
      <Html lang="pl">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document;