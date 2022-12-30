import { FunctionComponent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';

const Router: FunctionComponent = () => (
     <BrowserRouter>
     <div className="">
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
     </div>
     <ToastContainer />
     </BrowserRouter>
)

export default Router