import RepoItem from "./RepoItem"

function RepoList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
            <h2 className="font-bold font-mono card-title text-3xl my-4">Latest Repositories</h2>
            {
                repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo}/>
                ))
            }
        </div>
    </div>
  )
}

export default RepoList
