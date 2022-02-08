import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";

const Document: React.VFC = () => {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}

export default Document;
