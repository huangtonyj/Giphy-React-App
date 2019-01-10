import React from 'react'

export default function Button({searchTerm, color, onButtonClick}) {
  return (
    <button 
      className= {`ui inverted ${color} button`} 
      onClick={() => onButtonClick(searchTerm)}
    > 
      {searchTerm} 
    </button>
  )
}
