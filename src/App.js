import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './components/layouts/Alert';
import AnimatedRoutes from './components/Routes/AnimatedRoutes';


function App() {
  return (
    <GithubProvider>
    <AlertProvider>  
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Alert />
          <AnimatedRoutes />
        </main>
        <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
