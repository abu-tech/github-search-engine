import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import UserProfile from './components/users/UserProfile';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './components/layouts/Alert';


function App() {
  return (
    <GithubProvider>
    <AlertProvider>  
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Alert />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/user/:login' element={<UserProfile/>} />
            <Route path='/*' element={<NotFound/>} />
            <Route path='/notfound' element={<NotFound/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
