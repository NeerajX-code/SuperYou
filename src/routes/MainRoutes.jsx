import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Shop from '../pages/Shop/Shop'
import Faq from '../pages/Faq/Faq'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import Cart from '../pages/Cart/Cart'
import AuthPage from '../pages/Auth/Auth'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<AboutUs />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Faq' element={<Faq />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Auth' element={<AuthPage />} />
      <Route path='/Product/detail/:title' element={<ProductDetail />} />
    </Routes>
  )
}

export default MainRoutes