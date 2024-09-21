import HomeHeader from '@/components/headers/HomeHeader'
import PageLayout from '@/components/layouts/PageLayout'
import Footer from '@/components/navigation/Footer'
import Tabs from '@/components/navigation/Tabs'
import TopNavigation from '@/components/navigation/TopNavigation'
import EventsStack from '@/components/stack/EventsStack'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fesa.app | Find Unique Events in The Netherlands, Belgium, and the UK.</title>
        <meta name="description" content="Discover and book the most unique events in Netherlands, Belgium, and the UK with Fesa.app. Your go-to platform for unforgettable experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<TopNavigation />*/}
      <HomeHeader />
      <PageLayout>
        <EventsStack />
      </PageLayout>
      <Footer />
    </>
  )
}
