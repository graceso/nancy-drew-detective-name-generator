import React, { useState } from 'react'

const nancyDrewGameLocations = [
  'Shadow Ranch',
  'Blackmoor Manor',
  'Icicle Creek',
  'Treasure in the Royal Tower',
  'Moon Lake',
  'Blackmoor Manor',
  'Danger on Deception Island',
  'Message in a Haunted Mansion'
]

const detectiveTitles = [
  'Super Sleuth',
  'Mystery Master',
  'Clue Chaser',
  'Case Cracker',
  'Puzzle Solver',
  'Investigator'
]

function App() {
  const [detectiveName, setDetectiveName] = useState('')

  const generateDetectiveName = () => {
    const location = nancyDrewGameLocations[Math.floor(Math.random() * nancyDrewGameLocations.length)]
    const title = detectiveTitles[Math.floor(Math.random() * detectiveTitles.length)]

    setDetectiveName(`${title} of ${location}`)
  }

  return (
    <div className="app-container">
      <h1>nancy drew detective name generator</h1>
      <button onClick={generateDetectiveName}>generate my detective name</button>
      {detectiveName && <div className="detective-name">{detectiveName}</div>}
    </div>
  )
}

export default App
