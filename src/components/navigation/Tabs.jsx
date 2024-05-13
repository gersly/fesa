import React, { useState, useEffect } from 'react'

const tabs = [
  { name: 'All', slug: 'all', href: '#', current: true },
  { name: 'Online', slug: 'online', href: '#', current: false },
  { name: 'Today', slug: 'today', href: '#', current: false },
  { name: 'This weekend', slug: 'this-weekend', href: '#', current: false },
  { name: 'Free', slug: 'free', href: '#', current: false },
  { name: 'Music', slug: 'music', href: '#', current: false },
  { name: 'Food & Drink', slug: 'food-drink', href: '#', current: false },
  { name: 'Charity & Causes', slug: 'charity-causes', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Tabs() {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <div className='lg:py-4 py-2'>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => setActiveTab(e.target.value)}
          className="block w-full rounded-md border-neutral-300 py-2 pl-3 pr-10 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.slug === activeTab).name}
        >
          {tabs.map((tab) => (
            <option key={tab.slug} value={tab.slug}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-0 border-neutral-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
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
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </p>
            ))}
          </nav>
        </div>
      </div>
    </div >
  )
}
