import React, { useState, useEffect }
  from 'react'
import dayjs from 'dayjs' // ES 2015
import QueryDropdown from './bites/QueryDropdown'
dayjs().format()

function HomeHeader(props) {
  const [startingDate, setStartingDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'))
  const [query, setQuery] = useState("")

  useEffect(() => {
  }, [])


  return (
    <>
      <div className='flex lg:py-14 py-10 flex-col items-center justify-center'>
        <h1 className='xl:text-6xl text-5xl max-w-4xl text-center'>
          Unique things to do. Near you.
        </h1>
        <p className='text-2xl mt-8 text-neutral-800'>Fesa is your digital passport to find unique experiences near you.</p>
        <div className='max-w-3xl w-full md:block hidden mt-8'>
          <div className='bg-white border border-neutral-300 h-12 rounded-full w-6/6 flex'>
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
              font-medium bg-blue-500 text-white h-full w-full rounded-full hover:bg-blue-600'>
                  Search
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
