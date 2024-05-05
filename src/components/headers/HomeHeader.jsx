import React from 'react'
import PropTypes from 'prop-types'

function HomeHeader(props) {
  return (
    <>
      <div className='flex lg:min-h-[320px] md:min-h-[240px] min-h-[180px] space-y-8 flex-col items-start justify-center'>
        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-heading font-bold'>
          Fesa is your digital event passport to uncovering unique experiences
        </h1>
        <div className='w-full md:block hidden'>
          <div className='bg-neutral-300 border border-neutral-400 h-14 rounded-full w-6/6 flex'>
            <input
              className='px-4 lg:w-3/6 w-2/6 h-full bg-white rounded-l-full text-md outline-none'
              placeholder='Search events, venues or countries'
            />
            <div className='lg:w-3/6 w-4/6'>
              <input
                className='w-1/3 h-full px-2 border-x outline-none'
                type='date'
              />
              <input
                className='w-1/3 h-full px-2 border-r outline-none'
                type='date'
              />
              <button
                className='w-1/3 h-full rounded-r-full 
              font-medium bg-white hover:bg-neutral-100'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

HomeHeader.propTypes = {}

export default HomeHeader
