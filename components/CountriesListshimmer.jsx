import React from 'react'

/**
 * CountriesListShimmer Component
 * Shows animated placeholder cards while the country data is loading
 * Creates a smooth skeleton loading experience (shimmer effect)
 *
 * @param {number} count - Number of placeholder cards to display (default: 8)
 */
export default function CountriesListshimmer({ count = 8 }) {
  // Create an array of placeholder items
  const items = Array.from({ length: count })

  return (
    <div className="countries-container shimmer-list" aria-hidden="true">
      {items.map((_, i) => (
        <div className="country-card shimmer-card" key={i}>
          {/* Placeholder flag image */}
          <div className="shimmer-flag" />
          <div className="card-text">
            {/* Placeholder for country name */}
            <div className="shimmer-line title-line" />
            {/* Placeholder lines for country info */}
            <div className="shimmer-line" />
            <div className="shimmer-line short" />
            <div className="shimmer-line short" />
          </div>
        </div>
      ))}
    </div>
  )
}
