import GithubHooks from '../../Hooks/GithubHooks'
import * as S from './styled'

export default function Profile() {
    const {gitHub} = GithubHooks()
    return (
      
        <S.Container>
            <section className='flex gap-20 p-10 '>
                <img className='rounded-full w-56 ml-10' src={gitHub.user.avatar} alt="avatar do usuario" />
                <div>
                    <div>
                        <div><span className='text-lg'>{gitHub.user.login}</span></div>
                        <h1 className='text-lg'>{gitHub.user.name}</h1>
                        <div className='flex gap-3 pt-3'>
                        <h2>Repositorio:</h2> 
                        <a 
                        href={gitHub.user.html_url} 
                        target="_blank" 
                        rel='noreferrer'>{gitHub.user.html_url} </a>
                        </div>
                        <div className='pt-5'>
                            <h2>Bio:</h2>
                            <span>{gitHub.user.bio}</span>
                            </div>
                    </div>

                    <div className='flex gap-5 pt-5'>
                        <section>
                            <h3>Followers</h3>
                            <span className='text-white'>{gitHub.user.followers}</span>
                        </section>

                        <section>
                            <h3>Following</h3>
                            <span>{gitHub.user.following}</span>
                        </section>

                        <section>
                            <h3>Gists</h3>
                            <span>{gitHub.user.public_gists}</span>
                        </section>
                        <section>
                            <h3>Repos</h3>
                            <span>{gitHub.user.public_repos}</span>
                        </section>
                    </div>
                </div>
            </section>
        </S.Container>

    )
}
