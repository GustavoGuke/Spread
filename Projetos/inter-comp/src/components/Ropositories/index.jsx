import React from 'react'
import RepositoryItem from '../RepositoryItem'
import GithubHooks from '../../Hooks/GithubHooks'
import * as S from './styled'

export default function Repositories() {
    const {gitHub} = GithubHooks()
    return (
        <>
            <S.ContaierTabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <S.ContaierTabList>
                    <S.ContaierTab>Repositories</S.ContaierTab>
                    <S.ContaierTab>Starred</S.ContaierTab>
                </S.ContaierTabList>

                    <S.ContaierTabPanel>Panel Repositories
                        <RepositoryItem
                        name="name"
                        fullname="fullname"
                        link="https://github.com/GustavoGuke/app-biblia.io"
                        />
                    </S.ContaierTabPanel>
                    <S.ContaierTabPanel>Panel Starred
                    <RepositoryItem
                      name="name"
                      fullname="fullname"
                      link="https://github.com/GustavoGuke/app-biblia.io"
                    />
                    </S.ContaierTabPanel>
            </S.ContaierTabs>
        </>
    )
}
