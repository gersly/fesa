import { fetchEvents } from 'helpers/requests/fetchEvents';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';

const categories = [
  {
    name: 'Sagrada Familia: Drink for free at the door',
    slug: 'festivals',
    description: 'Ex consequat reprehenderit aliquip eiusmod qui occaecat deserunt consectetur cillum ipsum. Adipisicing dolore aliquip labore in pariatur. Enim ullamco proident tempor aliqua duis irure qui. Ut ad ullamco commodo occaecat occaecat velit anim esse eu enim proident. Ad officia culpa et excepteur.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNFvOMtZkamaH9dc9Zi7GKb7eWyQORMdSvIlUlZ=s680-w680-h510',
    trending: true,
    price: 49.99
  },
  {
    name: 'Sagrada Familia: Drink for free at the door',
    slug: 'festivals',
    description: 'Ex consequat reprehenderit aliquip eiusmod qui occaecat deserunt consectetur cillum ipsum. Adipisicing dolore aliquip labore in pariatur. Enim ullamco proident tempor aliqua duis irure qui. Ut ad ullamco commodo occaecat occaecat velit anim esse eu enim proident. Ad officia culpa et excepteur.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNFvOMtZkamaH9dc9Zi7GKb7eWyQORMdSvIlUlZ=s680-w680-h510',
    trending: false,
    price: 0
  },
  {
    name: 'Sagrada Familia: Drink for free at the door',
    slug: 'festivals',
    description: 'Ex consequat reprehenderit aliquip eiusmod qui occaecat deserunt consectetur cillum ipsum. Adipisicing dolore aliquip labore in pariatur. Enim ullamco proident tempor aliqua duis irure qui. Ut ad ullamco commodo occaecat occaecat velit anim esse eu enim proident. Ad officia culpa et excepteur.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNFvOMtZkamaH9dc9Zi7GKb7eWyQORMdSvIlUlZ=s680-w680-h510',
    trending: false,
    price: 200
  }
]

export default function EventsStack() {
  const [events, setEvents] = useState([])
  const [isLoading, toggleLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
      .then(data => {
        console.log('Response:', data);
        setEvents(data.data)
        setTimeout(() => {
          toggleLoading(false)
        }, 750);
      })
      .catch(error => {
        console.error('Error:', error);
        setEvents([])
        toggleLoading(false)
      });
  }, [])


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:my-4 my-2">
      {isLoading ? <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((event, index) => <div key={index}>
          <div className="rounded-md md:block hidden animate-pulse">
            <div className={`h-[180px] w-full px-4 py-5 rounded-md bg-neutral-200`} />
            <div className='py-2 space-y-1'>
              <div className='bg-neutral-200 rounded-md h-5 w-1/2' />
              <div className='bg-neutral-200 rounded-md h-7' />
              <div className='h-auto overflow-hidden w-full'>
                <div className='bg-neutral-200 h-5 w-1/3' />
                <div className='bg-neutral-200 h-5 w-1/3 rounded-md' />
              </div>
            </div>
          </div>
        </div>)}
      </> :

        <>
          {events?.length < 1 ? <p>No events found.</p> : <>
            {events?.map((event) => (
              <Link
                href={`/events/${event.id}`}
                key={event.id}
                className="bg-white  flex flex-col rounded-md text-neutral-900 cursor-pointer"
              >
                <div className="rounded-md md:block hidden">
                  <div className={`h-[180px] w-full px-4 py-5 rounded-md bg-neutral-100`}
                    style={{
                      backgroundImage: `url('${event.image_link}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center'
                    }}
                  >
                    {event.trending && <span className="inline-flex items-center rounded-md bg-neutral-900 px-2.5 py-1 text-sm font-semibold text-white">
                      🔥 Trending
                    </span>}
                  </div>
                  <div className='py-2 space-y-1'>
                    <p className='text-neutral-500 text-sm'>{dayjs(event.date).format('dddd, DD MMMM YYYY')}</p>
                    <h3 className='text-md hover:text-blue-600'>{event.title}</h3>
                    <div className='h-auto overflow-hidden w-full space-y-1'>
                      <p className='text-sm text-neutral-500'>{event.district}</p>
                      <p className='text-sm text-neutral-700 underline underline-offset-2 hover:text-blue-600'>{event.organisator}</p>

                      {/*<p className='text-sm h-20 text-neutral-500'>{event.description}</p>*/}
                    </div>

                  </div>
                </div>
                {/* Show on mobile */}
                <div className='flex items-center justify-between gap-2 md:hidden'>
                  <div className={`h-[94px] w-[150px] rounded-lg bg-neutral-100 border border-neutral-200`}
                    style={{
                      backgroundImage: `url('${event.image_link}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top'
                    }}
                  >
                  </div>
                  <div className='h-full w-full'>
                    <p className='font-medium'>{event.title}</p>
                    <p className='text-neutral-500 text-sm'>{dayjs(event.date).format('dddd, DD MMMM YYYY')}</p>
                    <p className='text-sm text-neutral-700'>{event.district}, {event.organisator}</p>

                    <div className='flex flex-wrap space-x-1 py-1 items-center justify-start text-xs'>
                      {!event?.trending &&
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-neutral-900 capitalize">
                          🔥 Trending
                        </span>
                      }

                      {event?.price === 0 ?
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-neutral-900 capitalize">
                          Free
                        </span>
                        :
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-neutral-900 capitalize">
                          Paid
                        </span>
                      }

                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>}
        </>}
    </div>
  )
}
