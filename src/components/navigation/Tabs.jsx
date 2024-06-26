import React, { useState, useEffect } from 'react'

const tabs = [
  { name: 'All', slug: 'all', href: '#', current: true },
  { name: 'Today', slug: 'today', href: '#', current: false },
  { name: 'This weekend', slug: 'this-weekend', href: '#', current: false },
  { name: 'Free', slug: 'free', href: '#', current: false },
  { name: 'Concert', slug: 'concert', href: '#', current: false },
  { name: 'Festival', slug: 'festival', href: '#', current: false },
  { name: 'Nightlife', slug: 'nightlife', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <div className="max-w-screen overflow-hidden sm:py-4 py-2">
      <div className="border-0 border-neutral-200">
        <nav className="flex space-x-8 overflow-y-scroll w-full" aria-label="Tabs">
          {tabs.map((tab) => (
            <p
              onClick={() => setActiveTab(tab.slug)}
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.slug === activeTab
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-neutral-500 hover:text-orange-500 hover:border-orange-500',
                'whitespace-nowrap py-4 cursor-pointer px-1 border-b-2 font-medium text-sm'
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
