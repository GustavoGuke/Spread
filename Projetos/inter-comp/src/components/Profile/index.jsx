import React from 'react'
import GithubHooks from '../../Hooks/GithubHooks'
import * as S from './styled'

export default function Profile() {
    const {gitHub} = GithubHooks()
    return (

        <S.Container>
            <section className='flex gap-20 p-10 '>
                <img className='rounded-full w-56 ml-10' src="https://avatars.githubusercontent.com/u/62183532?v=4" alt="avatar do usuario" />
                <div>
                    <div>
                        <h1>{gitHub.user.name}</h1>
                        <div className='flex gap-3 pt-3'>
                        <h2>UserName:</h2> <a href="https://github.com/GustavoGuke" target="_blank" rel='noreferrer'>Gustavo</a>
                        </div>
                    </div>

                    <div className='flex gap-5 pt-5'>
                        <section>
                            <h3>Followers</h3>
                            <span>5</span>
                        </section>

                        <section>
                            <h3>Followers</h3>
                            <span>5</span>
                        </section>

                        <section>
                            <h3>Followers</h3>
                            <span>5</span>
                        </section>
                    </div>
                </div>
            </section>
        </S.Container>

    )
}
