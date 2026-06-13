import React from 'react'

/**
 * CountryDetailShimmer Component
 * Displays an animated placeholder skeleton while country details are loading
 * Provides visual feedback during data loading with a shimmer animation effect
 */
export default function CountryDetailShimmer() {
  return (
    <main>
      <div className="country-details-container">
        {/* Placeholder back button */}
        <div className="back-button shimmer-back-button"></div>

        <div className="country-details">
          {/* Placeholder flag image */}
          <div className="shimmer-detail-image"></div>

          <div className="details-text-container">
            {/* Placeholder country name/title */}
            <div className="shimmer-title"></div>

            {/* Placeholder info lines (population, region, capital, etc.) */}
            <div className="details-text">
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>

            {/* Placeholder border countries info */}
            <div className="border-countries">
              <div className="shimmer-border-line"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
