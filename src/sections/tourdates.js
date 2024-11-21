import styled from "styled-components"
import TourDate from "../components/TourDate"
import { ParallaxBanner } from "react-scroll-parallax"
import { Flex } from "antd"

export default function TourDates(props) {
    const Container = styled.div `
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        height: fit-content;
    `
    const Header = styled.div `
        font-family: Pixel Mix;
        width: calc(100vw - 40px);
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        overflow: hidden;
        text-wrap: nowrap;
        height: 20px;
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
                {Array(25).fill(0).map(i => "Tour Dates ")}
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
                            {/*
                            EXAMPLE FOR TOUR DATES
                                <TourDate
                                    date="MAY X, 2025"
                                    time="XX:XXPM"
                                    location="FWA 2025"
                                    sublocation="Hyatt Room ABCD"
                                    image="./assets/fwa.png"
                                />
                            */}
                            <Placeholder>
                                No tour dates yet!
                            </Placeholder>
                        </Flex>
                    </Child>
                    
                </ParallaxBanner>
            </Container>
            
        </div>
    )
}