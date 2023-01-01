import React from 'react'
import './styles.scss'

type Props = {
  title?: string
}

const index = ({title}: Props) => {
  return (
    <div className='header-comp'>
      <h4>{title}</h4>
    </div>
  )
}

export default index