import React from 'react'
import PropTypes from 'prop-types'

function PageLayout({ children, backgroundColor }) {
  return (
    <div className={(`mx-auto max-w-5xl px-2 md:px-6 lg:px-8 py-4  ${backgroundColor}`)}>
      {children}
    </div>
  )
}

PageLayout.propTypes = {}

export default PageLayout
