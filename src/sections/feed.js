import { useEffect, useState } from "react"
import BlueskyPost from "../components/BlueskyPost";
import styled from "styled-components";
import Scroller from "../components/Scroller";

export default function Feed(props) {
    const [feed, setFeed] = useState(false);
    // Render my posts...
    // https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Adrwaulgtbi6gg5ix6edtlyyo&filter=posts_no_replies&includePins=fakse&limit=10

    const fetchPosts = async () => {
        let f1 = await fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did%3Aplc%3Adrwaulgtbi6gg5ix6edtlyyo&filter=posts_no_replies&includePins=fakse&limit=40")
        let data = await f1.json()
        setFeed(data.feed.filter(i => i.post.author.handle === "hyperpup.pet").slice(0, 10));
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const Parent = styled.div `
    width: calc(100vw - 40px);
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    
    `

    const Child = styled.div `
        display: flex;
        overflow-x: auto;
        flex-wrap: no-wrap;
        column-gap: 20px;
        margin-top: 20px;
    `

    const Header = styled.div `
        width: calc(100vw - 40px);
        text-align: left;
        overflow: hidden;
        text-wrap: nowrap;
        height: 30px;
        font-size: 20px;
        @media screen and (max-width: 900px) {
            font-size: 15px;
        } 
    `

    return (
        <Parent>
            <Header>
                <Scroller text="yapping yapping yapping yapping yapping&nbsp;" />
            </Header>
            <Child>
                {
                    feed ? 
                    feed.map(i => <BlueskyPost data={i} />) :
                    <div>Placeholder!</div>
                }
            </Child>
            
        </Parent>
    )
}