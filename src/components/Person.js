import React from 'react'

function Person(props) {
  const { person } = props
  return (
    <h2>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </h2>
  )
}

export default Person
