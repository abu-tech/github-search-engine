import { createContext, useReducer } from "react";
import axios from 'axios'
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({children}) => {
const initialState = {
    users:[],
    loading:false,
    repos:[],
    user:{}
}

const [state, dispatch] = useReducer(githubReducer, initialState);

const setLoading = ()=> {
    dispatch({
        type: 'SET_LOADING',
    })
}

    const SearchUsers = async(text)=> {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
            dispatch({
                type: 'GET_USERS',
                payload: res.data.items
            })
    }

    const getUser = async(login)=> {
        setLoading();

        try{
            const res = await axios.get(`https://api.github.com/users/${login}`, {
                headers:{
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })

            dispatch({
                type: 'GET_USER',
                payload: res.data
            })
        }
        catch(error){
            window.location = '/notfound'
        }
    }

    const getRepos = async(login)=> {
        setLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const res = await axios.get(`https://api.github.com/users/${login}/repos?${params}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
            dispatch({
                type: 'GET_REPOS',
                payload: res.data
            })
    }

    const clearUsers = ()=> {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        SearchUsers,
        clearUsers,
        getUser,
        getRepos
    }}>
    {children}
    </GithubContext.Provider>
} 

export default GithubContext;