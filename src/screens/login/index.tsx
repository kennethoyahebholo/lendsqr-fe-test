import { FunctionComponent } from 'react';
import './Login.scss';
import LoginComp from './LoginComp';
import TextInput from '../../components/input';
import { FormControl } from '@mui/material';

export interface ILogin {
  label?: string;
}

const Login: FunctionComponent<ILogin> = () => {
  return (
    <div className="register-form-view">
     <form className="register-form-view-cover app-max-width" 
     >
      <div className="register-form-view-cover-row row">
       <LoginComp />
       <div className="col-md-6 col-12 register-form-view-cover-row-form">
       <FormControl className="register-form-view-cover-row-form-cover">
         <div className="register-form-view-cover-row-form-cover-title">Welcome!</div>
         <div className="register-form-view-cover-row-form-cover-subtitle">Enter details to login.</div>

         <TextInput
           name="email"
           label="Email"
           width="100%"
           paddingLeft="44px"
         />
         <TextInput
           label="Password"
           isSecure
           width="100%"
           name="password"
           paddingLeft="44px"
         />
         <div className="register-form-view-cover-row-form-cover-forget">
           <span
           className="pointer">FORGOT PASSWORD?</span>
         </div>
         <button className={`mb-2 form-btn text-white rounded`}>
           {!true ? (
            <span>LOGGING IN</span>
           ) : (
             'LOG IN'
           )}
         </button>

        </FormControl>
       </div>
      </div>

     </form>
    </div>
  )
}

export default Login