import React from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

export default function HomePage({ searchQuery, setSearchQuery, selectedRegion, setSelectedRegion }) {
  return (
    <>
      <div className="search-filter-container">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SelectMenu selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
      <CountriesList searchQuery={searchQuery} selectedRegion={selectedRegion} />
    </>
  )
}