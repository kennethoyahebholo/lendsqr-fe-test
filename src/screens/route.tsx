import { FunctionComponent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Login from './login';
import User from './users';
import { UserProvider } from '../store/Users/user.provider';
import UserDetails from '../screens/userDetails'

const Router: FunctionComponent = () => (
     <BrowserRouter>
     <div className="">
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/login" element={<Login />} />
        <Route path="/user/all/*" element={
        <UserProvider>
          <User />
        </UserProvider>
        } />
        <Route path="/user-details/:userId" element={<UserDetails />} />
       </Routes>
     </div>
     <ToastContainer />
     </BrowserRouter>
)

export default Router