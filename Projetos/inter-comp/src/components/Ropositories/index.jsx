import React, { useEffect, useState } from 'react'
import RepositoryItem from '../RepositoryItem'
import GithubHooks from '../../Hooks/GithubHooks'
import * as S from './styled'

export default function Repositories() {
    const { gitHub, getUserRepos, getUserStarred } = GithubHooks()
    const [repos, setRepos] = useState(false)
    
    
    useEffect(() => {
        if ( !!gitHub.user.login) {
            getUserRepos(gitHub.user.login)
            getUserStarred(gitHub.user.login)
        }
        setRepos( !!gitHub.repositories)
        
    }, [gitHub.user.login])

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
                        <S.WrapperList>
                        {gitHub.repositories.map((item) => {

                            return (<RepositoryItem
                                key={item.id}
                                name={item.name}
                                fullname={item.full_name}
                                link={item.html_url}
                            />)
                        })}
                        </S.WrapperList>
                    </S.ContaierTabPanel>

                    <S.ContaierTabPanel>Panel Starred
                        <S.WrapperList>
                        {gitHub.starred.map((item) => {

                            return (<RepositoryItem
                                key={item.id}
                                name={item.name}
                                fullname={item.full_name}
                                link={item.html_url}
                            />)
                        })}
                        </S.WrapperList>
                    </S.ContaierTabPanel>
                </S.ContaierTabs>

            ) : <></>}

        </>
    )
}
