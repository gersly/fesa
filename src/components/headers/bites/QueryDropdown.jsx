import React, { useState, useEffect } from 'react'
import { Combobox } from '@headlessui/react'
const people = [
  'Amsterdam',
  'Rotterdam',
  'The Hague',
  'Groningen',
  'Eindhoven'
]

export default function QueryDropdown({ query, setQuery }) {

  const [selectedPerson, setSelectedPerson] = useState({})

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })


  return (
    <div className='lg:w-2/6 w-2/6 relative'>
      <Combobox
        value={selectedPerson}
        onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search events, venues or countries'
          className="placeholder:font-thin h-full w-full rounded-l-full px-4"

        />
        <Combobox.Options
          className={'bg-white border border-neutral-300 mt-4 rounded-lg shadow-md'}
        >
          {filteredPeople.length > 0 ?
            <>
              {filteredPeople.map((person) => (
                <Combobox.Option key={person} value={person}
                  className="p-4 cursor-pointer hover:bg-neutral-100"
                >
                  {person}
                </Combobox.Option>
              ))}
            </> : <>
              <Combobox.Option className="p-4">
                <b>No results found for:</b> <br />"{query}"
              </Combobox.Option>
            </>}
        </Combobox.Options>
      </Combobox>
    </div>
    //<input
    //  className='px-4 lg:w-3/6 w-2/6 h-full bg-white rounded-l-full text-md outline-none'
    //  placeholder='Search events, venues or countries'
    //  value={query}
    //  onChange={(e) => setQuery(e.target.value)}
    ///>


  )
}
