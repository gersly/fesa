import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const navigation = [
  { name: 'Events', href: '/events' },
  { name: 'Events in Paramaribo', href: '/city/paramaribo' },
  { name: 'Events in Amsterdam', href: '/city/amsterdam' },
  { name: 'Events in Rotterdam', href: '/city/rotterdam' },
  { name: 'Events in London', href: '/city/london' },
  { name: 'Venues', href: '/venues' },
  //{ name: 'Advertise with us', href: '/sell-tickets' },
  {
    //name: 'Add your event', href: '/post-event', current: true
  }
]

const authNav = [
  //{ name: 'Login', href: '/login', current: true },
  //{ name: 'Sign Up', href: '/register', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopNavigation() {

  return (
    <>
      <Disclosure as="nav" className="bg-black w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-5xl md:px-6 px-2 lg:px-8">
              <div className="relative flex h-14 items-center justify-between">

                <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                  <Link href="/" className="flex w-full items-left">
                    <p className='text-xl uppercase font-bold text-pink-400 -space-x-1 font-heading'>
                      Fesa
                    </p>
                  </Link>

                  <div className="hidden sm:ml-6 sm:block w-full">
                    <div className="flex space-x-4 items-center justify-end w-full">
                      {/*<input
                        placeholder='Search events'
                        className='border border-neutral-300 rounded h-10 text-neutral-900 w-full px-4 text-sm'
                      />*/}
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-pink-500 border-0 text-white' :
                              'text-white hover:bg-neutral-900 hover:text-neutral-100',
                            'px-3 py-2 rounded text-sm font-medium whitespace-nowrap'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded p-2 text-white 
                   focus:outline-none focus:ring-0">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden bg-black">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-white' : 'text-white',
                      'block px-3 py-2 rounded text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Mobile navigation */}
      {/*<div className='md:hidden h-16 flex items-center justify-between px-4 border-b shadow-sm py-3 space-x-1'>
        <Link href="/" className="flex flex-shrink-0 items-center">
          <p className='text-xl font-medium'>Fesa</p>
        </Link>
        <button
          className='px-3 py-1.5 hover:bg-neutral-100 flex items-center justify-center h-full border border-neutral-300 rounded font-medium cursor-pointer space-x-2'>
          <p>Log In</p>
        </button>

      </div>*/}
    </>
  )
}
