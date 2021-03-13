import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content='DevJobs App' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@joeetuso' />
          <meta property='og:type' content='website' />
          <meta name='author' content='Joseph Gattuso' />
          <meta property='og:site_name' content='DevJobs App' />
          <meta name='theme-color' content='#5964E0' />
          <meta
            name='description'
            content='A DevJobs app using GitHub Jobs API.'
          />
          <meta property='og:title' content='DevJobs App' />
          <meta
            property='og:description'
            content='A DevJobs app using GitHub Jobs API.'
          />
          <meta property='og:url' content='https://dev-jobs-api.vercel.app' />
          <meta property='twitter:title' content='DevJobs' />
          <meta
            property='twitter:description'
            content='A DevJobs app using GitHub Jobs API.'
          />
          <meta
            property='twitter:url'
            content='https://dev-jobs-api.vercel.app'
          />
          <meta
            property='og:image'
            content='https://dev-jobs-api.vercel.app/cover_light.png'
          />
          <meta
            property='twitter:image'
            content='https://dev-jobs-api.vercel.app/cover_light.png'
          />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap'
            rel='stylesheet'
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

export default MyDocument;
