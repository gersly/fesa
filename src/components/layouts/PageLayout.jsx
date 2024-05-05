import React from 'react'
import PropTypes from 'prop-types'

function PageLayout({ children }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
      {children}
    </div>
  )
}

PageLayout.propTypes = {}

export default PageLayout
