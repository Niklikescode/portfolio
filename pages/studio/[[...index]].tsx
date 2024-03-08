import Head from 'next/head'
import { metadata } from 'next-sanity/studio/metadata'


export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      
    </>
  )
}