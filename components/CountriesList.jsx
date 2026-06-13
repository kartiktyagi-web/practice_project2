import React, { useState, useEffect } from 'react'
import countriesData from '../countriesData'
import CountriesListshimmer from './CountriesListshimmer'
import CountryCard from './CountryCard'

export default function CountriesList({ searchQuery, selectedRegion }) {
  const [countries] = useState(countriesData)
  const [page, setPage] = useState(1)
  const itemsPerPage = 10
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPage(1)
  }, [searchQuery, selectedRegion])

  // show shimmer briefly on mount
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  // Filter countries based on search query and selected region
  const filteredCountries = countries.filter((country) => {
    const searchMatches = country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    const regionMatches = selectedRegion ? country.region === selectedRegion : true
    return searchMatches && regionMatches
  })

  // Calculate total pages and get countries for current page
  const totalPages = Math.max(1, Math.ceil(filteredCountries.length / itemsPerPage))
  const paginatedCountries = filteredCountries.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  // Navigation handlers for pagination
  const handlePrev = () => setPage((current) => Math.max(current - 1, 1))
  const handleNext = () => setPage((current) => Math.min(current + 1, totalPages))
  
  return (
    <>
      {loading ? (
        // Show shimmer placeholder while loading
        <CountriesListshimmer />
      ) : (
        // Show actual country list and pagination controls
        <>
          <div className="countries-container">
            {paginatedCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            ))}
          </div>

          {/* Pagination controls */}
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
      )}
    </>
  )
}