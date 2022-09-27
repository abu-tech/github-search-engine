import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div
    animate={{width: '100%'}}
    initial={{width: 0}}
    >
    <UserSearch />
    <UserResults />
    </motion.div>
  )
}

export default Home