import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CountryDetail from './components/CountryDetail'

import './App.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App