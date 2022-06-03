import React, { createContext } from 'react'
import { useState } from 'react'

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: []
})

export default function GithubProvider({ children }) {
    const [gitHub, setgitGub] = useState({
        user: {
            login: 'undefined',
            name: 'undefined',
            html_url: undefined,
            bio: undefined,
            following: 0,
            followers: 0,
            public_repos: 0,
            public_gists: 0,
        },
        repositories: [],
        starred: []
    }
    )
    const contextValue = {
        gitHub,
    }
    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}
