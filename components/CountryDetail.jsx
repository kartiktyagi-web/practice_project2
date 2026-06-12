import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countriesData from '../countriesData'

import './CountryDetail.css'

export default function CountryDetail() {
  const { countryName } = useParams()
  const navigate = useNavigate()
  const decodedName = decodeURIComponent(countryName || '')

  const countryData = useMemo(() => {
    return countriesData.find((item) => item.name.common === decodedName)
  }, [decodedName])

  if (!decodedName || !countryData) {
    return (
      <div className="country-details-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </button>
        <div className="error-message">Country not found.</div>
      </div>
    )
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