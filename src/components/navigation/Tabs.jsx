import React, { useState, useEffect } from 'react'

const tabs = [
  { name: 'For You', slug: 'for-you', href: '#', current: true },
  { name: 'All events', slug: 'all-events', href: '#', current: false },
  { name: 'Today', slug: 'today', href: '#', current: false },
  { name: 'This weekend', slug: 'this-weekend', href: '#', current: false },
  { name: 'This month', slug: 'this-month', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('for-you')
  return (
    <div className="max-w-screen overflow-hidden sm:py-4 py-2 sticky top-0 z-50 bg-white">
      <div className="border-0 border-neutral-200">
        <nav className="flex space-x-1 overflow-y-scroll w-full px-0 no-scrollbar items-end" aria-label="Tabs">
          {tabs.map((tab) => (
            <p
              onClick={() => setActiveTab(tab.slug)}
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.slug === activeTab
                  ? 'border-pink-400 text-pink-400 font-semibold text-sm'
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
