import '../styles/globals.css'
import Head from 'next/head';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';
import IndiaMartFloatButton from '../components/IndiaMartFloatButton';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="canonical" href="https://sktradings.in" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
      <WhatsAppFloatButton />
      <IndiaMartFloatButton />
    </>
  );
}