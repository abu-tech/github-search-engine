import {useContext,useEffect} from 'react'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import GithubContext from '../../context/github/GithubContext';
import {useParams,Link} from 'react-router-dom';
import RepoList from '../repos/RepoList';
import {motion} from 'framer-motion'

function UserProfile() {
  const {user, getUser, loading, repos, getRepos} = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

 // NOTE: check for valid url to users website

 const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog;

  if (loading) {
    return(
      <div className="flex justify-center">
          <button className="btn loading shadow-2xl">loading</button>
      </div>
   )
  }

  return (
      <motion.div
      animate={{width: '100%'}}
      initial={{width: 0}}
      >
        <div className='w-full mx-auto lg:w-10/12'>
          <div className='mb-4'>
            <Link to='/' className='btn btn-ghost font-mono'>
              Back To Search
            </Link>
          </div>
  
          <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
            <div className='custom-card-image mb-6 md:mb-0'>
              <div className='rounded-lg shadow-xl card image-full'>
                <figure>
                  <img src={avatar_url} alt='' />
                </figure>
                <div className='card-body justify-end'>
                  <h2 className='card-title mb-0 font-mono'>{name}</h2>
                  <p className='flex-grow-0 font-mono'>{login}</p>
                </div>
              </div>
            </div>
  
            <div className='col-span-2'>
              <div className='mb-6'>
                <h1 className='text-3xl card-title font-mono'>
                  {name}
                  <div className='ml-2 mr-1 badge badge-success font-mono'>{type}</div>
                  {hireable && (
                    <div className='mx-1 badge badge-info font-mono'>Hireable</div>
                  )}
                </h1>
                <p className="font-mono">{bio}</p>
                <div className='mt-4 card-actions'>
                  <a
                    href={html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-outline font-mono'
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
  
              <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                {location && (
                  <div className='stat'>
                    <div className='stat-title text-md font-mono'>Location</div>
                    <div className='text-lg stat-value font-mono'>{location}</div>
                  </div>
                )}
                {blog && (
                  <div className='stat'>
                    <div className='stat-title text-md font-mono'>Website</div>
                    <div className='text-lg stat-value font-mono'>
                      <a href={websiteUrl} target='_blank' rel='noreferrer'>
                        {websiteUrl}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md font-mono'>Twitter</div>
                    <div className='text-lg stat-value font-mono'>
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
  
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaUsers className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5 font-mono'>Followers</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {followers}
                </div>
              </div>
  
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaUserFriends className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5 font-mono'>Following</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl font-mono'>
                  {following}
                </div>
              </div>
  
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaCodepen className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5 font-mono'>Public Repos</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl font-mono'>
                  {public_repos}
                </div>
              </div>
  
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <FaStore className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5 font-mono'>Public Gists</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl font-mono'>
                  {public_gists}
                </div>
              </div>
            </div>
          </div>
          <RepoList repos={repos}/>
        </div>
      </motion.div>
    )
}

export default UserProfile