import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Loader from './components/Loader';
import HomePage from './components/HomePage';
import AddStock from './components/AddStock';
import AddCustomer from './components/AddCustomer';
import SellingPage from './components/SellingPage';
import SeeStock from './components/SeeStock';
import SeeProfits from './components/SeeProfits';
import Validate from './components/subcomps/Validate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Loader/>
  },{
    path:'/login',
    element:<LoginPage/>
  },{
    path:'/home',
    element:<HomePage/>
  },{
    path:'/addstock',
    element:<AddStock/>
  }
  ,{
    path:'/addcustomer',
    element:<AddCustomer/>
  },{
    path:'/sell',
    element:<SellingPage/>
  },{
    path:'/seestock',
    element:<SeeStock/>
  },{
    path:'/profits',
    element:<SeeProfits/>
  }
])
root.render(
  <div className=' h-full w-full min-h-screen min-w-screen bg-[#1f2020]'>
    <Validate/>
    <RouterProvider router={router} />
  </div>
);

reportWebVitals();
