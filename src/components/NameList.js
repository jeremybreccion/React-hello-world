import React from 'react'
import Person from './Person';

function NameList() {
  const names = ['Jeremy', 'Jano', 'Jenny', 'Jeremy']
//   const persons = [
//       {
//         id: 1,
//         name: 'Jeremy',
//         age: 23,
//         skill: 'React'
//       },
//       {
//         id: 2,
//         name: 'Jano',
//         age: 24,
//         skill: 'PHP'
//       },
//       {
//         id: 3,
//         name: 'Jenny',
//         age: 22,
//         skill: 'PHP'
//       }
//   ]
//   const personList = persons.map(person => <Person key={person.id} person={person} />)
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2> )
  return (
    <div>
      {/* {
          names.map(name => <h2>{name}</h2>)
      } */}
      {/* {personList} */}
      {nameList}
    </div>
  )
}

export default NameList
