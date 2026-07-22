import {createBrowserRouter } from 'react-router';
import ProductList from '../pages/ProductList';
import AddProduct from '../pages/AddProduct';

 const router = createBrowserRouter([
    {
        path:'/',
        element : <div> Home page</div>
    
    },
    {
        path:'/products',
        element:<ProductList/>
    },
    {
        path:'/products/add',
        element:<AddProduct/>
    }
]);
export default router;