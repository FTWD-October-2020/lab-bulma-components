import React from 'react'

const CoolButton = props => {
  console.log(props)
  return (
    <>
      <button className={`button ${props.classes}`}>{props.name}</button>
    </>
  )
}

export default CoolButton;