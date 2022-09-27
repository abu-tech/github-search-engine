import {motion} from 'framer-motion';

function About() {
  return (
    <>
    <motion.h1 animate={{x: 0}} initial={{x: window.innerWidth}} className='text-6xl mb-4'>Github Search Engine</motion.h1>
    <motion.p animate={{x: 0}} initial={{x: window.innerWidth}} className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details.
    </motion.p>
    <motion.p animate={{x: 0}} initial={{x: window.innerWidth}} className='text-lg text-gray-400'>
      Version <span className='text-white'>1.0.0</span>
    </motion.p>
  </>
  )
}

export default About