import Head from 'next/head'
import NextStudio from '@studiobear/next-studio'
import config from '../../studio.config.js'
import metadata from '../../studio.metadata.js'


export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  )
}