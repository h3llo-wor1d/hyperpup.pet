import styled from "styled-components"
import { ParallaxBanner } from "react-scroll-parallax"
import { Flex, Spin } from "antd"
import Scroller from "../components/Scroller"
import TourDate from "../components/TourDate"
import { useEffect, useState } from "react"
import { LoadingOutlined } from '@ant-design/icons';

const getRel = () => {
    return new Promise((resolve) => {
        fetch("https://raw.githubusercontent.com/h3llo-wor1d/static.hyperpup.pet/refs/heads/main/feed.json")
            .then(d => d.json())
            .then(d1 => {
                resolve(d1)
            });
    })
}
const LazyDates = () => {
    const [releases, setReleases] = useState(null);

    useEffect(() => {
        getRel().then((d) => {
            setReleases(d.tourdates);
        })
    }, [])

    return (
        releases === null ?  <Spin indicator={<LoadingOutlined spin />} size="large" />:
        releases.map(d => <TourDate 
            date={d.date}
            time={d.time}
            location={d.location}
            sublocation={d.sublocation}
            image={d.img}
            />
        )            
    )
}

export default function TourDates(props) {
    const Container = styled.div `
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        height: fit-content;
    `
    const Header = styled.div `
        width: calc(100vw - 40px);
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        overflow: hidden;
        text-wrap: nowrap;
        height: 30px;
        font-size: 20px;
        @media screen and (max-width: 900px) {
            font-size: 15px;
        } 
    `

    const Child = styled.div `
    position: absolute;
    width: 100%;
    justify-content: center;
    display: flex;
    `

    const Placeholder = styled.div `
    color: white;
    text-shadow: 5px 5px 2px black;
    font-size: 25pt;
    font-family: Pixel Mix;
    text-align: center;
    `

    return (
        <div>
            <Header>
                <Scroller text="tour dates tour dates tour dates tour dates&nbsp;" />
            </Header>
            <Container>
                <ParallaxBanner
                style={{ height: "300px", width: "100%"}}
                layers={[
                    {image: "./assets/yuri.png", speed: -20}
                    // https://e621.net/posts/4366660
                ]}
                >
                    <Child>
                        <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px"}} wrap>
                            <LazyDates />
                        </Flex>
                    </Child>
                    
                </ParallaxBanner>
            </Container>
            
        </div>
    )
}