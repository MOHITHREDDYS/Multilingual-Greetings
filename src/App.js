import {useState} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [activeId, updateActiveId] = useState(languageGreetingsList[0].id)

  const {imageUrl, imageAltText} = languageGreetingsList.find(eachGreeting => {
    if (eachGreeting.id === activeId) {
      return eachGreeting
    }
    return undefined
  })

  return (
    <div className="app-container">
      <h1 className="heading">Multilingual Greetings</h1>
      <ul>
        {languageGreetingsList.map(eachGreeting => {
          const {id, buttonText} = eachGreeting

          const onClickingButton = () => {
            updateActiveId(id)
          }

          const styling = id === activeId ? 'active-button' : ''

          return (
            <li key={id}>
              <button
                type="button"
                className={styling}
                onClick={onClickingButton}
              >
                {buttonText}
              </button>
            </li>
          )
        })}
      </ul>
      <img src={imageUrl} alt={imageAltText} className="image" />
    </div>
  )
}

export default App
