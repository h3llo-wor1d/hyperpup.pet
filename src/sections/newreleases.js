import { ParallaxBanner } from "react-scroll-parallax"
import styled from "styled-components"
import { Flex, Spin } from "antd"
import Release from "../components/Release"
import { Suspense, useEffect, useState } from "react"
import { LoadingOutlined } from '@ant-design/icons';
import Scroller from "../components/Scroller"

const getRel = () => {
    return new Promise((resolve) => {
        fetch("https://raw.githubusercontent.com/h3llo-wor1d/static.hyperpup.pet/refs/heads/main/feed.json")
            .then(d => d.json())
            .then(d1 => {
                resolve(d1)
            });
    })
}
const LazyReleases = () => {
    const [releases, setReleases] = useState(null);

    useEffect(() => {
        getRel().then((d) => {
            setReleases(d.releases);
        })
    }, [])

    return (
        releases === null ?  <Spin indicator={<LoadingOutlined spin />} size="large" />:
        releases.map(d => <Release 
            img={d.img}
            name={d.name}
            links={d.links}
            unlock={d.unlock ? new Date(d.unlock) : undefined}
            presave={d.presave ? d.presave : undefined}
            />
        )            
    )
}
export default function NewReleases(props) {

    const Parent = styled.div `
    width: calc(100vw - 40px);
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    `

    const Header = styled.div `
    width: 100%;
    overflow: hidden;
    text-wrap: nowrap;
    height: 30px;
    font-size: 20px;
    @media screen and (max-width: 900px) {
        font-size: 15px;
    } 
    `

    const Container = styled.div `
    margin-top: 20px;
    height: 400px;
    overflow: auto;
    `

    const Child = styled.div `
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    height: inherit;
    z-index: 100;
    `
    return (
        <Parent>
            <Header>
                <Scroller text="new releases new releases new releases&nbsp;" />
            </Header>
            <Container>
                <ParallaxBanner
                // todo: click on this and get a popup warning for furry porn and then send to the source for the bg image
                style={{ height: "inherit", width: "100%"}}
                layers={[
                    {image: "./assets/yaoi.png", speed: -20}
                    // CAUTION!!! SOURCE IS NSFW https://e621.net/posts/4356911
                ]}
                >
                    <Child>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px"}} wrap>
                                <LazyReleases />
                            </Flex>
                        </Suspense>
                    </Child>
                    
                </ParallaxBanner>
            </Container>
        </Parent>
    )
}