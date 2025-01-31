import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
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
  if (good === 0 && neutral === 0 && bad === 0) {
    return(
      <>
        <div>No feedback given</div>
      </>
    )
  }
  return(
  <table>
    <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={good+bad+neutral}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </tbody>
  </table>
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