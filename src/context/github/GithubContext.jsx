import { createContext, useState } from "react";
import axios from 'axios'

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async()=> {
        const res = await axios.get("https://api.github.com/users", {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        setUsers(res.data);
        setLoading(false);
    }

    return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers,
    }}>
    {children}
    </GithubContext.Provider>
} 

export default GithubContext;