import React from 'react'
import './LoginComp.scss'

import { ReactComponent as Logo } from "../../assets/svgs/loginLogo.svg";
import { ReactComponent as ClipArt } from "../../assets/svgs/art.svg";

const LoginComp = () => {
  return (
    <div className="col-md-6 col-12 admin-login-cover p-0 m-0">
    <div className="admin-login-cover-logo">
      <Logo />
    </div>
    <div className="admin-login-cover-icon">
      <ClipArt />
    </div>
  </div>
  )
}

export default LoginComp