import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          
          {/* Primary SEO Meta Tags */}
          <meta name="description" content="S.K Trading & Co. - Leading manufacturer of high-quality dismantling joint valves for water supply and industrial piping systems in India." />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph / Social Sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sktradings.in/" />
          <meta property="og:title" content="S.K Trading & Co. | Dismantling Joint Valves Manufacturer" />
          <meta property="og:description" content="Manufacturer of high-quality dismantling joint valves for pipeline systems across India." />
          <meta property="og:image" content="https://sktradings.in/images/og-image.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="S.K Trading & Co. | Dismantling Joint Valves Manufacturer" />
          <meta name="twitter:description" content="Manufacturer of high-quality dismantling joint valves for pipeline systems across India." />
          <meta name="twitter:image" content="https://sktradings.in/images/og-image.jpg" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://sktradings.in/" />

          {/* Preconnect for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Basic Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "S.K Trading & Co.",
              "url": "https://sktradings.in/",
              "logo": "https://sktradings.in/images/logo.png"
            })}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument