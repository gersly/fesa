import React, { useState, useEffect }
  from 'react'
import dayjs from 'dayjs' // ES 2015
import QueryDropdown from './bites/QueryDropdown'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import TopNavigation from '../navigation/TopNavigation'
dayjs().format()

function HomeHeader(props) {
  const [startingDate, setStartingDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'))
  const [query, setQuery] = useState("")

  useEffect(() => {
  }, [])

  const backgrounds = [
    'https://images.unsplash.com/photo-1583681716866-c0d24d132420?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610900603480-c0a85ac8e315?q=80&w=2563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531336542000-a8259492b550?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517983079452-bbaa6a081a6b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1559582759-e86a26070265?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  return (
    <>

      <div className='flex min-h-[580px] lg:py-14 py-10 flex-col items-center justify-center'
        style={{
          background: `url("${backgrounds[2]}")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}>
        <div className='absolute w-full bg-white p-0.5 max-w-6xl text-center rounded-md top-8'>
          <TopNavigation />
        </div>

        <h1 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl max-w-4xl text-center text-white'>
          Find fun things to do. Near you.
        </h1>
        <p className='text-2xl mt-8 text-white'>Fesa is your digital passport to find unique experiences near you.</p>
        <div className='max-w-3xl w-full md:block hidden mt-8'>
          <div className='bg-white border border-neutral-300 h-14 rounded-full w-6/6 flex'>
            <QueryDropdown
              query={query}
              setQuery={setQuery}
            />
            <div className='lg:w-4/6 w-4/6 flex items-center justify-center'>
              <input
                className='w-1/3 h-full px-2 border-x outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              <input
                className='w-1/3 h-full px-2 border-r outline-none'
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              <span className="w-1/3 h-full p-1 flex items-center justify-center rounded-r-full bg-white">
                <button
                  className='
              font-medium bg-black flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

HomeHeader.propTypes = {}

export default HomeHeader
