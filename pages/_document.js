import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import StoryblokService from '../utils/storyblok-service'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

          <script
            src={`//app.storyblok.com/f/storyblok-latest.js?t=h8TKgPUa1In519bvFoKQkAtt`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
