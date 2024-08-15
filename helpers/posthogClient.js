import { PostHog } from 'posthog-node'

export const posthogClient = new PostHog(
  process.env.NEXT_PUBLIC_POSTHOG_KEY,
  { host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com' }
)
