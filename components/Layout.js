import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  const url = 'https://the-training-mews.richardtowe.rs'
  return (
    <>
      <Head>
        <title>The Training Mews - Boutique Gym in Kensington, London</title>
        <meta name="description" content="The Training Mews is a boutique gym in Kensington, London that offers high-quality equipment and personal training to an exclusive group of clients."/>
        <meta name="keywords" content="The Training Mews, gym, personal training, Kensington, London"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        // Open Graph meta tags
        <meta property="og:title" content="The Training Mews - Boutique Gym in Kensington, London"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={url}/>
        <meta property="og:image" content={`${url}/images/logo.png`}/>
        <meta property="og:description" content="The Training Mews is a boutique gym in Kensington, London that offers high-quality equipment and personal training to an exclusive group of clients."/>
        <meta property="og:site_name" content="The Training Mews"/>
        <meta property="og:locale" content="en_GB"/>
        // Twitter Card meta tags
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="The Training Mews - Boutique Gym in Kensington, London"/>
        <meta name="twitter:description" content="The Training Mews is a boutique gym in Kensington, London that offers high-quality equipment and personal training to an exclusive group of clients."/>
        <meta name="twitter:image" content={`${url}/images/logo.png`}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <nav>
            <ul>
              <li><img width="100px" height="100px" src="/uploads/the-training-mews-300x300.png"/></li>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/prices"><a>Prices</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </nav>
        </header>
        {props.children}
      </body>
    </>
  )
}
