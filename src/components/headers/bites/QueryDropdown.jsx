import React, { useState, useEffect } from 'react'
import { Combobox } from '@headlessui/react'
const people = [
  'Amsterdam',
  'Rotterdam',
  'The Hague',
  'Groningen',
  'Eindhoven',
  'Paris',
  'Lyon',
  'London',
  'Manchester',
  'Birmingham',
  'Antwerp',
  'Brugge',
  'Ghent',
  'Brussels'
]

export default function QueryDropdown({ query, setQuery, placeholderValue }) {

  const [selectedPerson, setSelectedPerson] = useState({})

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })


  return (
    <>
      <div className='lg:w-2/6 w-2/6 md:block hidden relative'>
        <Combobox
          value={selectedPerson}
          onChange={setSelectedPerson}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholderValue || 'Search cities, venues or countries'}
            className="h-full w-full rounded-l-full px-4 capitalize"

          />
          <Combobox.Options
            className={'bg-white border border-neutral-300 mt-4 rounded-lg shadow-lg max-h-[250px] overflow-y-scroll'}
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
                  <b>No results found for:</b> <br />{`"${query}"`}
                </Combobox.Option>
              </>}
          </Combobox.Options>
        </Combobox>
      </div>
      {/* Show on mobile */}
      <div className='w-full md:hidden block relative'>
        <Combobox
          value={selectedPerson}
          onChange={setSelectedPerson}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder={'Search cities, venues or countries'}
            className=" placeholder:text-neutral-500 h-14 w-full px-4 capitalize outline-none"
          />
          <Combobox.Options
            className={'bg-white border absolute w-full border-neutral-300 mt-4 rounded-lg shadow-lg max-h-[250px] overflow-y-scroll'}
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
                  <b>No results found for:</b> <br />{`"${query}"`}
                </Combobox.Option>
              </>}
          </Combobox.Options>
        </Combobox>
      </div>
    </>

  )
}
