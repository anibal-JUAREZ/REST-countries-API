import React from 'react'
import './BorderLabel.css'
const BorderLabel = ({border, isDarkMode}) => {
  return (
    <p className={isDarkMode ? 'border-label dark-mode-bc':'border-label'}>{border}</p>
  )
}

export default BorderLabel;