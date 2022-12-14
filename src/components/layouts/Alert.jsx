import {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';
import {motion, AnimatePresence} from 'framer-motion';

function Alert() {
    const {alert} = useContext(AlertContext);

  return (
    alert !== null && (
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      id="alert-5" class="flex p-4 bg-gray-100 rounded-lg dark:bg-gray-800 mb-5 shadow-sm w-1/3 animate-bounce" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
        <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 font-mono">
          {alert.msg}
        </div>
      </motion.div>
    )
  )
}

export default Alert