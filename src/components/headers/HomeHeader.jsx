import React, { useState, useEffect }
  from 'react'
import dayjs from 'dayjs' // ES 2015
import QueryDropdown from './bites/QueryDropdown'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEventsStore } from '@/store/eventsStore'
import TopNavigation from '../navigation/TopNavigation'
dayjs().format()


function HomeHeader(props) {
  const [startingDate, setStartingDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'));
  const [city, setCity] = useState("");
  const { fetchEvents } = useEventsStore();

  const validateDates = () => {
    if(dayjs(endingDate).isBefore(dayjs(startingDate))) {
      // Adjust the ending date to be the same as the starting date or later
      setEndingDate(startingDate);
    }
  };



  const handleSearch = async () => {
    // Validate dates before making the search
    validateDates();

    console.log('searching...', city, startingDate, endingDate);
    await fetchEvents({
      city: city,
      startingDate: dayjs(startingDate).toISOString(),
      endingDate: dayjs(endingDate).toISOString()
    });
  };


  useEffect(() => {
    handleSearch();
  }, [city, startingDate, endingDate]);


  const backgrounds = [
    'https://images.unsplash.com/photo-1583681716866-c0d24d132420?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610900603480-c0a85ac8e315?q=80&w=2563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531336542000-a8259492b550?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517983079452-bbaa6a081a6b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1559582759-e86a26070265?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  return (
    <>

      <div className='flex lg:pb-10 bg-black md:pb-8 flex-col grayscale-0 items-center justify-center '
      //style={{
      //  background: `url("${backgrounds[3]}")`,
      //  backgroundPosition: 'center center',
      //  backgroundSize: 'cover',
      //}}
      >
        <TopNavigation />
        <div className='max-w-5xl md:px-8 w-full md:block hidden mt-4 space-y-4'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl text-left text-white font-bold font-heading'>
            Find fun things to do near you
          </h1>
          <div className='bg-white border border-neutral-300 h-10 rounded w-6/6 max-w-xl flex'>
            <QueryDropdown
              city={city}
              setCity={setCity}
            />
            <div className='lg:w-3/6 w-3/6 flex items-center justify-center rounded'>
              <input
                className='w-full h-full px-2 border-l rounded-r p-0.5 outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              {/*<input
                className='w-1/2 h-full px-2 border-r outline-none rounded-r-md'
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />*/}
              {/*<span className="w-1/3 h-full p-1 flex items-center justify-center rounded-r-full bg-white">
                <button
                  onClick={() => handleSearch()}
                  className='
              font-medium bg-neutral-900 flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>*/}
            </div>
          </div>
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden h-full px-2 py-4 space-y-2 flex flex-col items-start justify-end'>
          <h2 className='lg:text-5xl md:text-3xl text-2xl text-left text-white font-bold font-heading'>
            Find events near you
          </h2>
          <div className='bg-white border border-neutral-300 rounded p-0.5 h-10 w-6/6 flex'>
            <div className='col-span-2 flex items-center justify-center max-h-10'>
              <QueryDropdown
                city={city}
                setCity={setCity}
              />
              <input
                className='w-1/2 h-full px-2 border-l outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
            </div>
            {/*<div className='col-span-1 flex items-center justify-center h-14 w-full'>
              <input
                className='w-full h-full px-2 outline-none '
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
            </div>*/}
            {/*<div className='col-span-2 flex items-center justify-center h-14'>
              <span className="w-full h-full p-1 flex items-center justify-center  bg-white">
                <button
                  onClick={() => handleSearch()}
                  className='
              font-medium bg-neutral-900 flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  )
}

HomeHeader.propTypes = {}

export default HomeHeader
