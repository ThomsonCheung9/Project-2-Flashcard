import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FlashCards from './Components/FlashCards';
import './App.css'



function App() {

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(Math.floor(Math.random() * 6));
  }

  const question = ["Where are almonds planted", "What is the main vitamin in peanuts", "How many grams of nuts should you eat per day",
  "Is walnut good for the brain", "Where are walnuts grown", "Which state growns the most nuts"]

  const answer = ["Southwestern Asia", "Vitamin E", "28 grans", "Yes", "China", "California"]

  return(
    <div>
      <h1>The ultimate guide on nuts</h1>
      <h2>Do you like nuts? If so, do you know everything about them?</h2>
      <h3>Number of Cards: 6</h3>
      <div>
        <FlashCards question={question[count]} answer={answer[count]}></FlashCards>
      </div>
      <button onClick={updateCount}>➡️</button>
    </div>
  )
}

export default App
