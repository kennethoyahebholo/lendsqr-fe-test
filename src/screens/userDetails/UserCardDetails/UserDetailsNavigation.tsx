import React from 'react'
import './styles.scss'

type Props = {}

const userDetailsLink = [
 {
   link: '/user/general/',
   name: 'General Details',
 },
 {
   link: '/user/documents/',
   name: 'Documents',
 },
 {
   link: '/user/bank',
   name: 'Bank Details',
 },
 {
   link: '/user/loans',
   name: 'Loans',
 },
 {
   link: '/user/savings',
   name: 'Savings',
 },
 {
   link: '/user/app',
   name: 'App and System',
 },
]

const UserDetailsNavigation = (props: Props) => {
  return (
     <ul className='ul-con'>
      {
       userDetailsLink?.map((list, i) => (
         <li key={i}><a href={list?.link}>{list?.name}</a></li>
       ))
      }
     </ul>
  )
}

export default UserDetailsNavigation