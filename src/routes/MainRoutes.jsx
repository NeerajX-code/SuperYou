import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Shop from '../pages/Shop/Shop'
import Faq from '../pages/Faq/Faq'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<AboutUs />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Faq' element={<Faq />} />
    </Routes>
  )
}

export default MainRoutes