import React, { useState, useEffect } from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({ searchQuery, selectedRegion }) {
  const [countries] = useState(countriesData)
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    setPage(1)
  }, [searchQuery, selectedRegion])

  const filteredCountries = countries.filter((country) => {
    const searchMatches = country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    const regionMatches = selectedRegion ? country.region === selectedRegion : true
    return searchMatches && regionMatches
  })

  const totalPages = Math.max(1, Math.ceil(filteredCountries.length / itemsPerPage))
  const paginatedCountries = filteredCountries.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  const handlePrev = () => setPage((current) => Math.max(current - 1, 1))
  const handleNext = () => setPage((current) => Math.min(current + 1, totalPages))
  
  return (
    <>
      <div className="countries-container">
        {paginatedCountries.map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )
        })}
      </div>
      <div className="pagination-controls">
        <button disabled={page === 1} onClick={handlePrev}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  )
}