import '@/styles/globals.css'
import Head from 'next/head'
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import { Analytics } from "@vercel/analytics/react"
import { MapProvider } from '@/components/maps/map-providers'
import Script from 'next/script'

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
        {/*<Script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '255779914831607');
          fbq('track', 'PageView');
        </Script>*/}
        <Script
          dangerouslySetInnerHTML={{
            __html: ` !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '255779914831607');
          fbq('track', 'PageView');`
          }} />
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=255779914831607&ev=PageView&noscript=1"
        /></noscript>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Fesa</title>
        <meta name="description" content="Discover events in Paramaribo, Amsterdam & Rotterdam" />
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
        <meta name="twitter:url" content="https://fesa.app" />
        <meta name="twitter:title" content="Fesa" />
        <meta name="twitter:description" content="Discover events in Paramaribo, Amsterdam & Rotterdam" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fesa" />
        <meta property="og:description" content="Discover events in Paramaribo, Amsterdam & Rotterdam" />
        <meta property="og:site_name" content="Fesa" />
        <meta property="og:url" content="https://fesa.app" />
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