import React from 'react'

export default function ResultsIndex({fetchedResults}) {

  if (fetchedResults.length === 0) { return null; }

  const resultsIndex = fetchedResults.map(result => {
    return (
      <div className="column" key={result.id}>
        <iframe
          title={result.embed_url}
          src={result.embed_url}
          width="480" 
          height="364" 
          frameBorder="0" 
        />
      </div>
    )
  })

  return (
    <div className="ui grid">
      <div className="three column row">
        {resultsIndex}
      </div>
    </div>
  )
}
