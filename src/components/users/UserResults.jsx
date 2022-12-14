import { useContext } from "react"
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import {motion,AnimatePresence} from 'framer-motion';

function UserResults() {
    const {users, loading} = useContext(GithubContext);

    if(!loading){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <motion.div 
                        initial={{opacity:0}} 
                        animate={{opacity:1}}
                    >
                    <UserItem key={user.id} user={user}/>
                    </motion.div>
                ))}
            </div>
          )
    }
    else{
        return(
            <div className="flex justify-center">
                <button className="btn loading shadow-2xl">loading</button>
            </div>
        )
    }
}

export default UserResults