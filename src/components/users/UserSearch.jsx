import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
    const [text, setText] = useState('');
    const {users,SearchUsers,clearUsers} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);

    const handleChange = (e)=> {
        setText(e.target.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something!!', 'error');
        }
        else{
            SearchUsers(text);
            setText('');
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-md text-black font-mono font-bold" placeholder="Search" value={text} onChange={handleChange}/>
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-md font-mono">Go</button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
        <div>
            <button className="btn btn-ghost btn-md" type="submit" onClick={clearUsers}>Clear</button>
        </div>
        )}
    </div>
  )
}

export default UserSearch