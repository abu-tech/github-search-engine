import {Link} from 'react-router-dom'

function UserItem({user}) {
  return (
    <div className="card  card-compact card-side bg-base-200 hover:shadow-lg transition duration-150 ease-out hover:ease-in">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={user.avatar_url} alt="" />
                    </div>
                </div>
            </div>
            <div>
                    <h2 className="card-title font-mono">{user.login}</h2>
                    <Link to={`/users/${user.login}`} className="text-base-content text-opacity-40 font-mono">Vist Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem