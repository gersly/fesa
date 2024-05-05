import React from 'react'

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
  return (
    <div className="grid grid-cols-1 md:gap-4 gap-2 sm:grid-cols-3 lg:my-8 my-2">
      {categories.map((category) => (
        <div
          key={category.slug}
          className="relative bg-white flex flex-col rounded-lg border border-neutral-300 text-neutral-900 shadow-sm focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 hover:border-orange-500"
        >
          <div className="rounded-lg md:block hidden">
            <div className={`h-[240px] w-full px-4 py-5 rounded-t-lg bg-neutral-100`}
              style={{
                backgroundImage: `url('${category.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top'
              }}
            >
              {category.trending && <span className="inline-flex items-center rounded-md bg-neutral-900 px-2.5 py-1 text-sm font-semibold text-white">
                🔥 Trending
              </span>}
            </div>
            <div className='px-4 py-5 space-y-3'>
              <h3 className='font-bold font-heading text-xl'>{category.name}</h3>
              <div className='h-auto overflow-hidden w-full'>
                <p className='text-sm font-body h-20 text-neutral-500'>{category.description}</p>
              </div>
              {category.price === 0 ? <p className='font-bold text-neutral-900 font-body text-2xl'>Free</p>
                : <p className='font-bold text-neutral-900 font-body text-2xl'>${category.price} <span className='font-medium text-base text-neutral-500'>
                  per ticket</span></p>}
            </div>
          </div>
          <div className='flex items-center justify-between gap-2 md:hidden p-2'>
            <div className={`h-[94px] w-[150px] rounded-lg bg-neutral-100 border border-neutral-200`}
              style={{
                backgroundImage: `url('${category.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top'
              }}
            >

            </div>
            <div className='h-full w-full space-y-2'>
              <p className='font-medium'>{category.name}</p>

              <div className='flex flex-wrap space-x-1 items-center justify-start text-sm'>
                {category?.trending &&
                  <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-black capitalize">
                    🔥 Trending
                  </span>
                }

                {category?.price === 0 ?
                  <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-black capitalize">
                    Free
                  </span>
                  :
                  <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-black capitalize">
                    Paid
                  </span>
                }

                <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-black capitalize">
                  {category?.slug}
                </span>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
