import { FunctionComponent, useState } from 'react';
import './Login.scss';
import LoginComp from './LoginComp';
import TextInput from '../../components/input';
import { FormControl } from '@mui/material';
import useForm from '../../customHooks/useForm';
import { setItemsToLocalStorage } from '../../utils/helpers';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export interface ILogin {
  label?: string;
}

const Regex = RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/);

const Login: FunctionComponent<ILogin> = () => {
  const [loading, setLoading] = useState(false);
   const {
    formValues,
    handleChange,
    resetForm,
  } = useForm(
    {
      email: '',
      password: '',
    },
  );

  const navigate = useNavigate()
  const timeout = 2200;

  const handleOnSubmit: (arg: any) => void = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    console.log(`This is my data ${formValues?.email}`)
    try {
      if( formValues?.email === "" || formValues?.password === "" ){
        toast.error('Please fill in your details', {autoClose: timeout});
        resetForm({
          password: '',
          email: '',
        });
        setLoading(false);
      }else if( !Regex.test(formValues?.email) ){
        toast.error('Invalid Email', {autoClose: timeout});
        resetForm({
          password: '',
          email: '',
        });
        setLoading(false);
        console.log('wrong email')
        return
      }
      
      else{
        setItemsToLocalStorage('verifyEmail', formValues?.email);
        toast.success('Login successfully', {autoClose: timeout});
        navigate('/user/all')
        resetForm({
          password: '',
          email: '',
        });
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      toast.error('Something went wrong. Try again or contact Support');
      resetForm({
        password: '',
        email: '',
      });
    }
  };

  return (
    <div className="register-form-view">
     <form className="register-form-view-cover app-max-width"
     onSubmit={handleOnSubmit}
     >
      <div className="register-form-view-cover-row row">
       <LoginComp />
       <div className="col-md-6 col-12 register-form-view-cover-row-form">
       <FormControl className="register-form-view-cover-row-form-cover">
         <div className="register-form-view-cover-row-form-cover-title">Welcome!</div>
         <div className="register-form-view-cover-row-form-cover-subtitle">Enter details to login.</div>

         <TextInput
           label="Email"
           width="100%"
           paddingLeft="44px"
           customOnChange={handleChange}
           name="email"
           value={formValues.email}
         />
         <TextInput
           label="Password"
           isSecure
           width="100%"
           paddingLeft="44px"
           customOnChange={handleChange}
           name="password"
           value={formValues.password}
         />
         <div className="register-form-view-cover-row-form-cover-forget">
           <span
           className="pointer">FORGOT PASSWORD?</span>
         </div>
         <button className="mb-2 form-btn text-white rounded">
          {loading ? (
            'LOGGING IN...'
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