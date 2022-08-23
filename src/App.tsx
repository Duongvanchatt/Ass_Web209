import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import UserLayout from './component/layout/user';
import AdminLayout from './component/layout/admin';
import HomePage from './page/Home/home';
import DetailPage from './page/Home/Detail';
import ProductAdminPage from './page/Admin/Product/product';
import AddProductPage from './page/Admin/Product/addPro';
import EditProduct from './page/Admin/Product/editPro';
import Cart from './page/Home/Cart';
import CategoryAdminPage from './page/Admin/Categories/categories';
import AddCatePage from './page/Admin/Categories/addCate';
import EditCate from './page/Admin/Categories/editCate';
import Signup from './page/Auth/Signup';
import SignupAdmin from './page/Auth/ListUsers';
import EditUser from './page/Auth/editUser';
import Signin from './page/Auth/Signin';
function App() {
  return (
       <div className="App">
        <Routes>
          <Route path='/' element={<UserLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='detail/:id' element={<DetailPage/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>
          <Route path='signup' element={<Signup/>}/>
          <Route path='signin' element={<Signin/>}/>
          {/* Admin layout */}
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<ProductAdminPage/>}/>
          
          <Route path='user'>
              <Route index element={<SignupAdmin />} />
              <Route path='edit/:id' element={<EditUser/>}/>
          </Route>

          <Route path='product'>
            <Route index element={<ProductAdminPage/>}/>
            <Route path='add' element={<AddProductPage/>}/>
            <Route path='edit/:id' element={<EditProduct/>}/>
          </Route>

          <Route path='categories'>
            <Route index element={<CategoryAdminPage/>}/>
            <Route path='add' element={<AddCatePage/>}/>
            <Route path='edit/:id' element={<EditCate/>}/>
          </Route>

        </Route>

        </Routes>
        </div>
  )
}

export default App
