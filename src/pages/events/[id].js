import PageLayout from '@/components/layouts/PageLayout'
import TopNavigation from '@/components/navigation/TopNavigation'
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { ArrowLeft, PaperMoney, PaperMoneyTwo, Pin } from '@icon-park/react'
import { useEventsStore } from '@/store/eventsStore'
import Image from 'next/image'
import { MapComponent } from '@/components/maps/map'
dayjs().format()

export default function EventDetailPage() {
  const { event, isLoading, activeEvent, fetchEvent } = useEventsStore()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    id && fetchEvent(id)
  }, [id])

  return (
    <div className='bg-neutral-50 min-h-screen pb-10'>
      <Head>
        <title>{activeEvent?.title || activeEvent?.name || 'Find events on Fesa.app'} | Fesa.app</title>
        <meta name="description" content={'Find events in Paramaribo, Amsterdam, and Rotterdam on Fesa'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigation />
      <PageLayout>
        <div className='flex items-center justify-start w-full pb-2'>
          <button
            onClick={() => router.back()}
            className='text-neutral-600 text-md rounded-full p-2 bg-white shadow-md border border-neutral-100'>
            <ArrowLeftIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-center flex-col w-full rounded'>
          <div className='md:h-[420px] md:bg-contain bg-cover md:bg-no-repeat h-[220px] bg-neutral-200 w-full rounded'
            style={{
              backgroundImage: `url('${activeEvent?.image || 'https://placekitten.com/500/500'}')`,
              //backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
          <div className='space-y-4 w-full bg-white shadow-md md:p-4 p-2 my-2 rounded'>
            <h1 className='md:text-3xl text-xl font-semibold'>{activeEvent?.name}</h1>
            <p className='md:text-md text-sm'>{activeEvent?.description}</p>
            <div className='flex items-center justify-start space-x-2 text-neutral-600 text-md'>
              <ClockIcon className='w-5 h-5' />
              <p className='md:text-md text-sm'>{dayjs(activeEvent?.start_date).format('dddd, DD MMMM YYYY')}</p>
            </div>
            <div className='flex items-center justify-start space-x-2 text-neutral-600 text-md'>
              <PaperMoneyTwo className='w-5 h-5' />
              <p className='capitalize md:text-md text-sm'>{activeEvent?.min_price ? activeEvent.min_price : 'Free'}</p>
            </div>
            <div
              onClick={() => router.push(`/venues/${activeEvent?.venues?.internal_id}`)}
              className='border rounded hover:bg-neutral-100 cursor-pointer 
            min-h-16 p-2 gap-4'>
              {/*<div className='flex items-center justify-center 
              w-14 h-14 bg-neutral-100 rounded-full'>
              </div>*/}
              <div className='md:text-md text-sm capitalize grid sm:grid-cols-6 gap-4 mb-4'>
                {activeEvent?.venues?.image && <div className='col-span-1'>
                  <Image
                    src={activeEvent?.venues?.image}
                    alt={activeEvent?.venues?.name}
                    width={150}
                    height={150}
                    className='rounded-md'
                  />
                </div>
                }
                {activeEvent?.venues?.image2 && <div className='col-span-1'>
                  <Image
                    src={activeEvent?.venues?.image2}
                    alt={activeEvent?.venues?.name}
                    width={150}
                    height={150}
                    className='rounded-md'
                  />
                </div>
                }
                <div className='col-span-4 flex flex-col items-start h-full w-full justify-start'>
                  <p className='text-xl font-bold'>{activeEvent?.venue}</p>
                  <p>{activeEvent?.venues?.street}</p>
                  <p>{activeEvent?.venues?.city}</p>
                </div>
              </div>
              {activeEvent?.venues?.latitude &&
                <span aria-disabled="true">
                  <MapComponent
                    center={{
                      lat: parseFloat(activeEvent?.venues?.latitude),
                      lng: parseFloat(activeEvent?.venues?.longitude)
                    }}
                  />
                </span>
              }
            </div>
          </div>
        </div>
      </PageLayout >
    </div >
  )
}
