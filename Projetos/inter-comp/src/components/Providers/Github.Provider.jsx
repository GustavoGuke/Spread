import React, { createContext, useCallback } from 'react'
import { useState } from 'react'

import api from '../../services/api'
import img from '../../img/git.png'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: []
})

export default function GithubProvider({ children }) {
    const [gitHub, setGithub] = useState({
        loading: false,
        user: {
            login: 'Pesquise um Repositorio',
            name: 'O nome do usuário apararecera aqui',
            html_url: undefined,
            bio: undefined,
            following: 0,
            followers: 0,
            public_repos: 0,
            public_gists: 0,
            avatar: img
        },
        repositories: [],
        starred: []
    })

    const getUser = username => {
        setGithub((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }))
        api.get(`users/${username}`)
            .then(({ data }) => {
                setGithub((prevState) => ({
                    ...prevState,
                    user: {
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        bio: data.bio,
                        following: data.following,
                        followers: data.followers,
                        public_repos: data.public_repos,
                        public_gists: data.public_gists,
                        avatar: data.avatar_url
                    },
                }))
            }).finally(() => {
                setGithub((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading
                }))
            })
    }
    const contextValue = {
        gitHub,
        getUser: useCallback((username) => getUser(username), []),
    }
    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}
