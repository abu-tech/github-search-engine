import Home from '../../pages/Home';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';
import UserProfile from '../users/UserProfile';
import { Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/user/:login' element={<UserProfile/>} />
            <Route path='/*' element={<NotFound/>} />
            <Route path='/notfound' element={<NotFound/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes