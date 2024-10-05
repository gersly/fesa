

import { useEffect, useRef } from 'react'

const AdWidget = (src) => {
  const adRef = useRef(null)

  useEffect(() => {
    if(adRef.current) {
      console.log('adRef.current', adRef.current)
      const script = document.createElement('script')
      script.src = `${src}`
      script.async = true
      adRef.current.appendChild(script)
    }
  }, [])

  return <div ref={adRef}></div>
}

export default AdWidget