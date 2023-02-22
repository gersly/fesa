import { Camp, Dumbbell, Funds, MicrophoneOne, Mountain, Theater } from '@icon-park/react'
import React from 'react'

const categories = [
  {
    name: 'Festivals',
    slug: 'festivals',
    icon: Camp
  },
  {
    name: 'Parties under $20',
    slug: 'under-20',
    icon: Funds
  },
  {
    name: 'Outdoors',
    slug: 'outdoors',
    icon: Mountain
  },
  {
    name: 'Conferences',
    slug: 'conference',
    icon: MicrophoneOne
  },
  {
    name: 'Theater',
    slug: 'theater',
    icon: Theater
  },
  {
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    icon: Dumbbell
  },
  // More people...
]
export default function CategoryStack() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:my-8 my-2">
      {categories.map((category) => (
        <div
          key={category.email}
          className="relative bg-white flex items-center space-x-3 rounded-lg border border-neutral-300 text-neutral-900 shadow-sm focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 hover:border-orange-500 hover:text-orange-500"
        >
          <div className="bg-orange-100 h-full w-20 flex items-center justify-center py-5 rounded-l-lg">
            <category.icon className="text-xl text-orange-500" aria-hidden="true" />
          </div>
          <div className="px-6 py-5 rounded-r-lg">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium ">{category.name}</p>
              <p className="truncate text-sm text-neutral-500">{category.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
