import { Flex } from "antd"
import styled from "styled-components"

export default function About() {
    const Parent = styled.div `
    padding: 20px;
    `

    const Header = styled.div `
    font-family: "Gothic Pixels";
    font-size: 40pt;
    margin-bottom: 10px;
    @media screen and (max-width: 900px) {
        font-size: 30pt;
    }
    `

    const Bio = styled.div `
    font-size: 18pt;
    line-height: 125%;
    font-family: "Leander";
    @media screen and (max-width: 900px) {
        font-size: 12pt;
    }
    `

    const Content = styled.div `
    width: 70%;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
    `

    const PressPhoto = styled.div `
    display: flex;
    width: 25%;
    @media screen and (max-width: 900px) {
        display: none;
        width: 100%;
        height: 300px;
        overflow: hidden;
        align-items: center;
        border-radius: 30px;
    }
    `

    const Photo = styled.img `
        margin-top: 3px;
        width: 100%;
        @media screen and (max-width: 900px) {
            margin-top: 200px;
        } 
        border-radius: 30px;
    `

    const LinkButton = styled.span `
    &:hover {
        opacity: .75;
        cursor: pointer;
    }
    `

    const handle = (url) => {
        window.open(url, "_blank");
    }

    return (
        <Parent>
            <Flex justify="space-between" wrap space-evenly gap="20px">
                <Content>
                    <Header>About hyperpup</Header>
                    <Bio>
                    Taking influence from artists such as  and , HYPERPUP brings industrial hyperrave to the furry scene in the most degenerate way possible. 
                    Going through the lengths to get clearance to sample literal furry porn, to the face-melting, provocative cringe of her song titles,
                    she provides a sound described as "definitely music". If you looked at her profile from a distance,
                    you may think you were looking at 's page. Hyper's style truly knows no bounds, releasing anything from hardstyle that 
                    will melt your face off to absolute bangers and ass shakers.
                    <br/><br/>For business, booking, and all other inquiries, please send an email to contact@hyperpup.pet
                    </Bio>
                </Content>

                <PressPhoto>
                    <div>
                        <Photo src="./assets/pfp.png" />
                    </div>
                    
                </PressPhoto>
            </Flex>
            
        </Parent>
    )
}