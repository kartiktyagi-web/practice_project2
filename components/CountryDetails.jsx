import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countriesData from '../countriesData'

export default function CountryDetails() {
  const { countryName } = useParams()
  const navigate = useNavigate()
  const country = countriesData.find(
    (item) => item.name.common === decodeURIComponent(countryName)
  )

  if (!country) {
    return (
      <div className="country-details">
        <p>Country not found.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    )
  }

  return (
    <div className="country-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      <p><b>Population:</b> {country.population.toLocaleString('en-IN')}</p>
      <p><b>Region:</b> {country.region}</p>
      <p><b>Capital:</b> {country.capital?.[0]}</p>
      <p><b>Currency:</b> {Object.values(country.currencies || {}).map((c) => c.name).join(', ')}</p>
      <p><b>Languages:</b> {Object.values(country.languages || {}).join(', ')}</p>
    </div>
  )
}