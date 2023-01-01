import React from 'react'
import './Card.scss'



type Props = {
 Icon?: any,
 number?: any,
 status?: any,
 id?: any,
}

const Card = ({Icon, number, status, id}: Props) => {
  return (
    <div className="card-comp">
    <Icon />
    <h4>{status}</h4>
    <h2>{number}</h2>
  </div>
  )
}

export default Card