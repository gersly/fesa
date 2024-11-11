import '@/styles/globals.css'
import Head from 'next/head'
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import { Analytics } from "@vercel/analytics/react"
import { MapProvider } from '@/components/maps/map-providers'

if(typeof window !== 'undefined') { // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
    disable_session_recording: true,
    autocapture: {
      dom_event_allowlist: ['click'], // DOM events from this list ['click', 'change', 'submit']
      //url_allowlist: ['posthog.com./docs/.*'], // strings or RegExps
      // url_ignorelist can be used on its own, or combined with url_allowlist to further filter which URLs are captured
      element_allowlist: ['button', 'a', 'select'], // DOM elements from this list ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
    },
    loaded: (posthog) => {
      if(process.env.NODE_ENV === 'development') {
        posthog.debug() // debug mode in development
      } else {
        posthog.startSessionRecording()
      }
    },
  })
}

export default function App(
  { Component, pageProps: { session, ...pageProps } }
) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Fesa</title>
        <meta name="description" content="Discover events near you" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#111111" />
        <meta name="theme-color" content="#111111" />
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://fesa.vercel.app" />
        <meta name="twitter:title" content="Fesa - Discover events near you" />
        <meta name="twitter:description" content="Discover events near you" />
        <meta name="twitter:image" content="/twitter.png" />
        <meta name="twitter:creator" content="@gxrsly" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fesa" />
        <meta property="og:description" content="Discover the best events near you" />
        <meta property="og:site_name" content="Fesa - Discover events near you" />
        <meta property="og:url" content="https://fesa.vercel.app" />
        <meta property="og:image" content="/og.png" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />
      </Head>
      <PostHogProvider client={posthog}>
        <MapProvider>
          <Component {...pageProps} />
        </MapProvider>
        <Analytics />
      </PostHogProvider>
    </>
  )
}