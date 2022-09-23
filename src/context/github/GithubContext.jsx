import { createContext, useReducer } from "react";
import axios from 'axios'
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({children}) => {
const initialState = {
    users:[],
    loading:false
}

const [state, dispatch] = useReducer(githubReducer, initialState);

const setLoading = ()=> {
    dispatch({
        type: 'SET_LOADING',
    })
}

    const SearchUsers = async(text)=> {
        setLoading();

        const params = new URLSearchParams({
            q:text
        })

        const res = await axios.get(`https://api.github.com/search/users?q=sam`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        console.log(res.items)
        dispatch({
            type: 'GET_USERS',
            payload: res.items
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        SearchUsers,
    }}>
    {children}
    </GithubContext.Provider>
} 

export default GithubContext;