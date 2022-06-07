import { useContext } from "react"
import { GithubContext } from "../components/Providers/github.provider"

export default function GithubHooks() {

    const { gitHub, getUser } = useContext(GithubContext)
    return { gitHub,getUser }
}
