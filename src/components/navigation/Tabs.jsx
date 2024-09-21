import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
dayjs().format()



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs(
  {
    startingDate,
    setStartingDate,
  }
) {

  const today = dayjs().format('YYYY-MM-DD');
  const thisWeekend = dayjs().day(dayjs().day() <= 6 ? 6 : 13).format('YYYY-MM-DD');
  const nextMonth = dayjs().endOf('month').format('YYYY-MM-DD');

  const tabs = [
    { name: 'All events', slug: 'all-events', value: today, current: true },
    { name: 'Today', slug: 'today', value: today, current: false },
    { name: 'This weekend', slug: 'this-weekend', value: thisWeekend, current: false },
    { name: 'Next month', slug: 'next-month', value: nextMonth, current: false },
  ]

  const [activeTab, setActiveTab] = useState('all-events')
  const handleTabChange = (tab) => {
    setActiveTab(tab.slug)
    setStartingDate(tab.value)
  }


  return (
    <div className="max-w-5xl w-full overflow-hidden sm:py-4 py-2 sticky top-0 z-0 bg-white">
      <div className="border-0 border-neutral-200">
        <nav className="flex space-x-1 overflow-y-scroll w-full px-0 no-scrollbar items-end" aria-label="Tabs">
          {tabs.map((tab) => (
            <p
              onClick={() => handleTabChange(tab)}
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
