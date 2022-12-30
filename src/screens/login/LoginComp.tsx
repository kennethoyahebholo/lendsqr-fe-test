import React from 'react'
import './LoginComp.scss'
import {
  Logo,
  ClipArt
} from "../../assets/index";


type Props = {}

const LoginComp = (props: Props) => {
  return (
    <div className="col-md-6 col-12 admin-login-cover p-0 m-0">
    <div className="admin-login-cover-logo">
      <img  src={Logo} alt="" />
    </div>
    <div className="admin-login-cover-icon">
    <img src={ClipArt} alt="" />
    </div>
  </div>
  )
}

export default LoginComp