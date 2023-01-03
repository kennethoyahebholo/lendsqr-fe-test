import React from 'react'
import './styles.scss'

import { ReactComponent as BackIcon } from "../../../assets/svgs/back.svg";
import { useNavigate } from 'react-router-dom';

type Props = {
  title?: string
}


const Index = ({title}: Props) => {
 const navigate = useNavigate();

 const handleBack = () => {
  navigate('/user/all/*')
}

  return (
    <div className='header-comp'>
     <div className='header-comp-back'>
      <BackIcon className='pointer' onClick={handleBack}/>
      <h6>Back to Users</h6>
     </div>
     <div className='header-comp-details'>
      <h4>{title}</h4>
      <div className='header-comp-details-button'>
       <button className='header-comp-details-button-blacklist'>BLACKLIST USER</button>
       <button className='header-comp-details-button-activate'>ACTIVATE USER</button>
      </div>
     </div>
    </div>
  )
}

export default Index