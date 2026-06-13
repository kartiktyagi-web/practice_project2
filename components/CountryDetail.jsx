import React, { useMemo, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countriesData from '../countriesData'
import CountryDetailShimmer from './CountryDetailShimmer'

import './CountryDetail.css'

/**
 * CountryDetail Component
 * Displays detailed information about a selected country
 * Shows shimmer loading effect while data is being processed
 */
export default function CountryDetail() {
  const { countryName } = useParams() // Get country name from URL params
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true) // Controls shimmer visibility
  const decodedName = decodeURIComponent(countryName || '')

  // Find the country data from countriesData array
  const countryData = useMemo(() => {
    return countriesData.find((item) => item.name.common === decodedName)
  }, [decodedName])

  // Show shimmer loading effect for 600ms when country name changes
  useEffect(() => {
    const loadingTimer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(loadingTimer)
  }, [decodedName])

  // Handle error state (country not found)
  if (!decodedName || !countryData) {
    if (loading) {
      return <CountryDetailShimmer />
    }
    return (
      <div className="country-details-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </button>
        <div className="error-message">Country not found.</div>
      </div>
    )
  }

  // Show shimmer while loading
  if (loading) {
    return <CountryDetailShimmer />
  }

  return (
    <main>
      <div className="country-details-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </button>
        <div className="country-details">
          <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name.common}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:</b> {Object.values(countryData.name.nativeName)[0].common}
              </p>
              <p>
                <b>Population:</b> {countryData.population.toLocaleString('en-IN')}
              </p>
              <p>
                <b>Region:</b> {countryData.region}
              </p>
              <p>
                <b>Sub Region:</b> {countryData.subregion}
              </p>
              <p>
                <b>Capital:</b> {countryData.capital?.join(', ') || 'N/A'}
              </p>
              <p>
                <b>Top Level Domain:</b> {countryData.tld?.join(', ') || 'N/A'}
              </p>
              <p>
                <b>Currencies:</b> {Object.values(countryData.currencies || {}).map((c) => c.name).join(', ')}
              </p>
              <p>
                <b>Languages:</b> {Object.values(countryData.languages || {}).join(', ')}
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries:</b>&nbsp; {countryData.borders?.join(', ') || 'None'}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}