import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<AboutUs />} />
     </Routes>
  )
}

export default MainRoutes