import { useState, useEffect } from 'react'

/**
 * Header Component
 * Displays the page title and theme toggle button with dynamic sun/moon icons
 */
export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // On component mount, load theme from localStorage if available
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const darkMode = savedTheme === 'dark' || (!savedTheme && document.body.classList.contains('dark'))
    document.body.classList.toggle('dark', darkMode)
    setIsDarkMode(darkMode)
  }, [])

  /**
   * Toggle dark mode on/off
   * Persist theme choice in localStorage for future visits
   */
  const handleThemeToggle = () => {
    const nextDarkMode = !isDarkMode
    document.body.classList.toggle('dark', nextDarkMode)
    window.localStorage.setItem('theme', nextDarkMode ? 'dark' : 'light')
    setIsDarkMode(nextDarkMode)
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        {/* Theme toggle button - shows sun icon in dark mode, moon icon in light mode */}
        <p className="theme-changer" onClick={handleThemeToggle}>
          {isDarkMode ? (
            <>
              <i className="fa-regular fa-sun" /> Light Mode
            </>
          ) : (
            <>
              <i className="fa-regular fa-moon" /> Dark Mode
            </>
          )}
        </p>
      </div>
    </header>
  )
}