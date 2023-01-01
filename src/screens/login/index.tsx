import { FunctionComponent, useState } from 'react';
import './Login.scss';
import LoginComp from './LoginComp';
import TextInput from '../../components/input';
import { FormControl } from '@mui/material';
import useForm from '../../customHooks/useForm';
import { setItemsToLocalStorage } from '../../utils/helpers';
import CircularProgress from '@mui/joy/CircularProgress';
// import useToast from '../../customHooks/useToast';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export interface ILogin {
  label?: string;
}

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

  const handleOnSubmit: (arg: any) => void = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    console.log(`This is my data ${formValues?.email}`)
    try {
      const payload = {
        email: formValues?.email,
        password: formValues?.password,
      };

      if( formValues?.email === "" || formValues?.password === "" ){
        toast.error('Please fill in your details');
        resetForm({
          password: '',
          email: '',
        });
        setLoading(false);
      }else{
        setItemsToLocalStorage('verifyEmail', formValues?.email);
        toast.success('Login successfully');
        navigate('./user/all')
        resetForm({
          password: '',
          email: '',
        });
        setLoading(false);
      }


      // const resp = await loginMerchant({ variables: payload });
      // setLoading(false);
      // if (resp && resp.data && resp.data.merchantLogin) {
      //   resetForm({
      //     password: '',
      //     email: '',
      //   });
        // if (parseInt(resp.data.merchantLogin.status, 10) !== 200) {
        //   // setError(resp.data.merchantLogin.message);
        //   Toast.error(resp.data.merchantLogin.message);

        //   return;
        // }
        // if (resp.data.merchantLogin.token) {
        //   setToken(resp.data.merchantLogin.token);
        //   setUser(resp.data.merchantLogin);
        //   Toast.success('Login successfully');
        //   getProfileQuery();
        //   setHasToken(true);
        //   return;
        // }
        // Toast.error('Something went wrong. Try again or contact Support');
      // }      
    } catch (e) {
      setLoading(false);
      // if (e && e.graphQLErrors && e.graphQLErrors.length > 0) {
      //   const { message } = e.graphQLErrors[0];
      //   const newMessage = message || 'Invalid credentials';
      //   Toast.error(newMessage);
      //   // Toast.error(e.graphQLErrors[0].message)
      // } else {
      //   Toast.error('Something went wrong. Try again or contact Support');
      // }
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
            // <CircularProgress size="md" variant="plain" color="warning"/>
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