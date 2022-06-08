import React, { useEffect, useState } from 'react'
import RepositoryItem from '../RepositoryItem'
import GithubHooks from '../../Hooks/GithubHooks'
import * as S from './styled'

export default function Repositories() {
    const { gitHub, getUserRepos } = GithubHooks()
    const [repos, setRepos] = useState(false)
    
    useEffect(() => {
        if ( !!gitHub.user.login) {
            getUserRepos(gitHub.user.login)
        }
        setRepos( !!gitHub.repositories)
    }, [gitHub.user.login])

    let repo = gitHub.repositories.map((item) => {
        return item
    })
    console.log(repo)
    return (
        <>
            {repos ? (
                <S.ContaierTabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <S.ContaierTabList>
                        <S.ContaierTab>Repositories</S.ContaierTab>
                        <S.ContaierTab>Starred</S.ContaierTab>
                    </S.ContaierTabList>

                    <S.ContaierTabPanel>Panel Repositories
                        {gitHub.repositories.map((item) => {

                            return (<RepositoryItem
                                key={item.id}
                                name={item.name}
                                fullname="fullname"
                                link="https://github.com/GustavoGuke/app-biblia.io"
                            />)
                        })}

                    </S.ContaierTabPanel>

                    <S.ContaierTabPanel>Panel Starred
                        {gitHub.repositories.map((item) => {

                            return (<RepositoryItem
                                key={item.id}
                                name={item.name}
                                fullname="fullname"
                                link="https://github.com/GustavoGuke/app-biblia.io"
                            />)
                        })}
                    </S.ContaierTabPanel>
                </S.ContaierTabs>

            ) : <></>}

        </>
    )
}
