import React from 'react';
import Button from './Button';

export default function ButtonsIndex({onButtonClick}) {
  const COLORS = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'brown',
    'black'
  ]
  
  const SEARCHTERMS = [
    'Dog',
    'Cat',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Applause'
  ]

  const buttons = SEARCHTERMS.map((searchTerm, idx) => {
    return (
      <Button
        key={searchTerm}
        searchTerm={searchTerm}
        color={COLORS[idx % COLORS.length]}
        onButtonClick={onButtonClick}
      />
    )
  })  

  return (
    <div className="ui inverted segment">
      {buttons}
    </div>
  )
}

