import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import numberService from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    numberService.getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    numberService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewNumber('')
        setNewName('')
      })    

    setNewName('')
  }

  const deletePerson = (id) => {
    numberService.remove(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = search === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Search</h2>
      <Filter filter={search} handleFilterChange={handleFilterChange}/>
      <h2>Phonebook</h2>
      <PersonForm
        onSubmit={addPerson} 
        name={{value: newName, onChange: handleNameChange}}
        number={{value: newNumber, onChange: handleNumberChange}}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleButton={deletePerson} />
    </div>
  )
}

export default App