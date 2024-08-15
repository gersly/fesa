import Link from "next/link"

const emojiCircleIcon = (countryIso) => {
  switch(countryIso) {
    case 'nl':
      return '🇳🇱'
    case 'be':
      return '🇧🇪'
    case 'uk':
      return '🇬🇧'
    default:
      return ''
  }
}

const Footer = () => {
  return (
    <footer className='bg-black text-white p-4 flex items-center justify-center w-full'>
      <div className='md:flex md:space-y-0 space-y-6 items-start justify-between max-w-4xl w-full'>
        <p className="text-md">&copy; {new Date().getFullYear()} Fesa</p>
        <div className='flex flex-col items-start justify-center gap-1 text-md'>
          <h4 className="font-normal text-md text-neutral-400">Links</h4>
          <Link href='/about' className='hover:underline underline-offset-2'>About</Link>
          <Link href='/events' className='hover:underline underline-offset-2'>Events</Link>
          <Link href="/venues" className='hover:underline underline-offset-2'>Venues</Link>
          <Link href='/blog' className='hover:underline underline-offset-2'>Blog</Link>
          <Link href='/contact' className='hover:underline underline-offset-2'>Contact</Link>

        </div>
        <div className='flex flex-col items-start justify-center gap-1 text-md'>
          <h4 className="font-normal text-md text-neutral-400">Parties by city</h4>
          <Link href='/events?city=amsterdam' className='hover:underline underline-offset-2'>Events in Amsterdam {emojiCircleIcon('nl')}</Link>
          <Link href='/events?city=rotterdam' className='hover:underline underline-offset-2'>Events in Rotterdam {emojiCircleIcon('nl')}</Link>
          <Link href='/events?city=antwerpen' className='hover:underline underline-offset-2'>Events in Antwerpen {emojiCircleIcon('be')}</Link>
          <Link href='/events?city=brussels' className='hover:underline underline-offset-2'>Events in Brussels {emojiCircleIcon('be')}</Link>
          <Link href='/events?city=london' className='hover:underline underline-offset-2'>Events in London {emojiCircleIcon('uk')}</Link>
          <Link href='/events?city=manchester' className='hover:underline underline-offset-2'>Events in Manchester {emojiCircleIcon('uk')}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer