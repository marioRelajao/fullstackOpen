const Persons = ({persons, handleButton}) => {
    console.log(handleButton)
    return (
        <div>
            {persons.map(person => <div key={person.name}>
                {person.name} {person.number}
                <button onClick={() => handleButton(person.id)}>delete</button>
            </div>)}
        </div>
    )
}

export default Persons