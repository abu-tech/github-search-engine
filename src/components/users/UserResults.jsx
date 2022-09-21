import { useState,useEffect } from "react"
import axios from 'axios'
import UserItem from "./UserItem";

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async()=> {
        const res = await axios.get("https://api.github.com/users", {
            headers:{
                Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`
            }
        })
        setUsers(res.data);
        setLoading(false);
    }

    if(!loading){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <h3><UserItem key={user.id} user={user}/></h3>))}
            </div>
          )
    }
    else{
        return(
            <div className="flex justify-center">
                <button className="btn loading">loading</button>
            </div>
        )
    }
}

export default UserResults