import DiscoverHeader from '@/components/headers/DiscoverHeader'
import OrganisersHeader from '@/components/headers/OrganisersHeader'
import PageLayout from '@/components/layouts/PageLayout'
import TopNavigation from '@/components/navigation/TopNavigation'
import VenuesStack from '@/components/stack/VenuesStack'
import Head from 'next/head'

export default function PlacePage() {
  return (
    <>
      <Head>
        <title>Venues near me | Fesa.app</title>
        <meta name="description" content={'Find venues in Paramaribo, Amsterdam, and Rotterdam on Fesa'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrganisersHeader />
      <PageLayout>
        <VenuesStack />
      </PageLayout>
    </>
  )
}
