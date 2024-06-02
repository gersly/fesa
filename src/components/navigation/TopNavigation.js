import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const navigation = [
  { name: 'Party Agenda', href: '/events', current: false },
  { name: 'Post your own event', href: '/organisor', current: false }
]

const authNav = [
  { name: 'Login', href: '/login', current: true },
  { name: 'Sign Up', href: '/register', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopNavigation() {
  let [isOpen, setIsOpen] = useState(false)
  let [location, setLocation] = useState('Paramaribo, Suriname, SR')

  const handleLocation = (newLocation) => {
    setIsOpen(false)
    setLocation(newLocation)
  }
  return (
    <>
      <Disclosure as="nav" className="bg-white border-b border-neutral-200 md:block hidden">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href="/" className="flex flex-shrink-0 items-center">
                    <p className='text-2xl'>Fesa.app</p>
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <input
                        placeholder='Search events'
                        className='border border-neutral-300 rounded-md text-neutral-900 lg:w-80 px-4 text-sm'
                      />
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-neutral-50 text-neutral-900' : 'text-neutral-900 hover:bg-neutral-100 hover:text-black',
                            'px-3 py-2 rounded-md text-md font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex space-x-4">
                    {authNav.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-900 hover:bg-neutral-100 hover:text-black',
                          'px-3 py-2 rounded-md text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-900 hover:bg-neutral-100 hover:text-black',
                      'block px-3 py-2 rounded-md text-base font-medium'
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
      <div className='md:hidden h-16 flex items-center justify-between px-4 border-b shadow-sm py-3 space-x-1'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-3 py-1.5 hover:bg-neutral-100 flex items-center justify-center h-full border border-neutral-300 rounded-md font-medium cursor-pointer space-x-2'>
          <p>{location}</p>
          <ChevronDownIcon className='text-neutral-900 block w-5 h-5' />
        </button>
        <button
          className='px-3 py-1.5 hover:bg-neutral-100 flex items-center justify-center h-full border border-neutral-300 rounded-md font-medium cursor-pointer space-x-2'>
          <p>Log In</p>
        </button>

      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto max-w-sm rounded-md bg-white w-full min-h-[100px] max-h-[320px] overflow-y-scroll">
              <div className='p-2'>
                <Dialog.Title className={'font-medium text-lg text-neutral-900'}>Select a city</Dialog.Title>
              </div>
              <div className='p-2'>
                {["Wanica, Suriname", "Amsterdam, Nederland", "Rotterdam, Nederland", "Antwerpen, Belgie", "Brussels, Belgie"].map((loc, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleLocation(loc)}
                      className='h-10 text-md text-neutral-600'>
                      <p>{loc}</p>
                    </div>
                  )
                })}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
