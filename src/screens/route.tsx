import { FunctionComponent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Login from './login';
import User from './users';

const Router: FunctionComponent = () => (
     <BrowserRouter>
     <div className="">
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/user/all/*" element={<User />} />
       </Routes>
     </div>
     <ToastContainer />
     </BrowserRouter>
)

export default Router