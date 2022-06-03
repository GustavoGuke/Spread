import { useContext } from "react"
import { GithubContext } from "../components/Providers/github.provider"

export default function GithubHooks() {

    const { gitHub } = useContext(GithubContext)
    return { gitHub }
}
