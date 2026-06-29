import Head from 'next/head';

export default function SEO({
  title       = 'Hishma Hameed | Software Engineer',
  description = 'Final-year BEng Software Engineering student at APIIT Sri Lanka.',
  url         = 'https://my-portfolio-hishma.vercel.app/',
  image       = 'https://my-portfolio-hishma.vercel.app/og-image.png',
}) {
  return (
    <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description"        content={description} />
      <meta name="author"             content="Hishma" />
      <meta name="keywords"           content="software engineer, Sri Lanka" />
      <link rel="canonical"           href={url} />

      {/* Open Graph — controls how link looks on LinkedIn, WhatsApp, Facebook */}
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={image} />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content="Hishma Portfolio" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/og-image.png" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4f46e5" />
    </Head>
  );
}