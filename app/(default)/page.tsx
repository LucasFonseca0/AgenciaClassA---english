import Head from 'next/head';
import { getSEO } from '../../lib/seo';

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import OurTeam from '@/components/OurTeam'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  const seo = getSEO({
    title: 'Home - ClassA',
    description: 'Explore our innovative digital marketing solutions and learn how we can help your business grow.',
    url: 'https://www.classaagency.com',
  });

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="canonical" href={seo.url} />
      </Head>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <OurTeam />
      <ContactForm />
    </>
  );
}
