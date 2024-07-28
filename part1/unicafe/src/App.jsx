import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) =>{ 
  var average = (good - bad) / (good + neutral + bad)
  if (average === Infinity || isNaN(average)) {
    average = 0
  }
  var positive = (good / (good + neutral + bad)) * 100
  if (isNaN(positive)) {
    positive = 0
  }
  return(
  <>
    <div>Good: {good}</div>
    <div>Neutral: {neutral}</div>
    <div>Bad: {bad}</div>
    <div>All: {good + neutral + bad}</div>
    <div>Average: {average}</div>
    <div>Positive: {positive} %</div>
  </>
)}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleButton = (props) => {
    console.log(props)
    if (props === 'good') {
      setGood(good + 1)
    }
    if (props === 'bad') {
      setBad(bad + 1)
    }
    if (props === 'neutral') {
      setNeutral(neutral + 1)
    }
  }


  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={() => handleButton('good')} text="Good" />
        <Button handleClick={() => handleButton('neutral')} text="Neutral" />
        <Button handleClick={() => handleButton('bad')} text="Bad" />
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}

export default App