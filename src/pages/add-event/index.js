import PageLayout from '@/components/layouts/PageLayout'
import TopNavigation from '@/components/navigation/TopNavigation'
import Script from 'next/script'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <div>
      <Head>
        <title>Add event | Fesa.app</title>
        <meta name="description" content="Add your event to Fesa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigation />
      <PageLayout>
        <h1
          className='text-3xl font-bold text-left mt-8 mb-8'
        >
          Add your event to Fesa
        </h1>
        <iframe
          data-tally-src="https://tally.so/embed/nP88Rx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="284"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Fesa event form"></iframe>


        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            Tally.loadEmbeds();
          }}
        />

      </PageLayout>
    </div>
  )
}
