import React, { useState, useEffect } from 'react'

const tabs = [
  { name: 'All events', slug: 'all', href: '#', current: true },
  { name: 'Today', slug: 'today', href: '#', current: false },
  { name: 'This weekend', slug: 'this-weekend', href: '#', current: false },
  { name: 'Free', slug: 'free', href: '#', current: false },
  { name: 'Concert', slug: 'concert', href: '#', current: false },
  { name: 'Festival', slug: 'festival', href: '#', current: false },
  { name: 'Nightlife', slug: 'nightlife', href: '#', current: false },
  { name: 'Food', slug: 'food', href: '#', current: false },
  { name: 'Sports', slug: 'sports', href: '#', current: false },
  { name: 'Family', slug: 'family', href: '#', current: false },
  { name: 'Other', slug: 'other', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <div className="max-w-screen overflow-hidden sm:py-4 py-2">
      <div className="border-0 border-neutral-200">
        <nav className="flex space-x-2 overflow-y-scroll w-full pb-2 no-scrollbar" aria-label="Tabs">
          {tabs.map((tab) => (
            <p
              onClick={() => setActiveTab(tab.slug)}
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.slug === activeTab
                  ? 'border-pink-500 text-pink-500 font-semibold text-sm'
                  : 'border-transparent text-neutral-500 hover:text-pink-500 hover:border-pink-500 text-sm font-base',
                'whitespace-nowrap cursor-pointer bg-white rounded-full min-w-20 py-0.5 px-2 border-2'
              )}
              aria-current={tab.current ? 'page' : undefined}>
              {tab.name}
            </p>
          ))}
        </nav>
      </div>
    </div>
  )
}
