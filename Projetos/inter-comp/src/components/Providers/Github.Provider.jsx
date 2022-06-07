import React, { createContext, useCallback } from 'react'
import { useState } from 'react'

import api from '../../services/api'

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
            login: undefined,
            name: 'undefined',
            html_url: undefined,
            bio: undefined,
            following: 0,
            followers: 0,
            public_repos: 0,
            public_gists: 0,
            avatar: undefined
        },
        repositories: [],
        starred: []
    })

    const getUser = username => {
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
