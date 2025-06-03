import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductRange from '../components/ProductRange'
import Features from '../components/Features'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import Footer from '../components/Footer'
import ClientSlider from '../components/ClientSlider'

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Playfair Display', serif" }}>
      <Head>
        <title>S.K Trading & Co. | Premium Dismantling Joint Valves 80mm-2500mm</title>
        <meta 
          name="description" 
          content="India's leading manufacturer of premium dismantling joint valves (80mm-2500mm) for water supply & industrial pipelines. ISO-certified quality with 15+ years industry experience." 
        />
        <meta 
          name="keywords" 
          content="dismantling joint valve manufacturer, pipeline valves supplier, water supply valves India, industrial valves 80mm to 2500mm, SK Trading valves Mumbai, best quality dismantling joints, flange valves manufacturer, municipal water valves, ductile iron valves, PN10 PN16 valves" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <ProductRange />
      <Features />
      <ClientSlider/>
      <ContactForm />
      <Map />
      <Footer />
    </div>
  )
}