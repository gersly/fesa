import '@/styles/globals.css'
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'

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
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  )
}