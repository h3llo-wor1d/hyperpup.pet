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
                        Making her official debut as HYPERPUP with the energetic release of 
                        LOST IN SPACE featuring <LinkButton onClick={() => handle("https://bsky.app/profile/awerewa.net")}>Awerewa</LinkButton> in 
                        early March 2024, Atlanta-born tranny Willow Rubenstein has made music specifically for silly little autistic freaks like YOU to stim to. If you enjoy her music, 
                        you have good taste, and you will likely live an extra 25 years due to the de-aging nature of her art. 
                        If you would like to book her for a show, or for other general inquiries, you may contact her via her official email, <LinkButton onClick={() => handle("mailto:contact@hyperpup.pet")}>contact@hyperpup.pet</LinkButton>
                        <br/><br/>
                        The vibrant artwork featured on her work is created by her boyfriend, <LinkButton onClick={() => handle("https://bsky.app/profile/aliens.bsky.social")}>Neptune</LinkButton>, 
                        who has been her artist for 2 years, and has been the designer of all of her OCs (Original Characters) since 2022. If you like his art, his commissions
                        are always open, you can contact him via <LinkButton onClick={() => handle("https://bsky.app/profile/aliens.bsky.social")}>Bluesky</LinkButton> or <LinkButton onClick={() => handle("https://discord.gg/FUuvFfwkCz")}>the official Alienfish Discord Server</LinkButton>.
                        <br/><br/>
                        The fagslop featured on this website was taken from e621, and you can find the original works by clicking <LinkButton onClick={() => handle("https://e621.net/posts/4356911")}>here</LinkButton> and <LinkButton onClick={() => handle("https://e621.net/posts/4366660")}>here</LinkButton>.
                        Please open with caution, as the originals are significantly more sexual than the cropped versions on this website.
                    </Bio>
                </Content>

                <PressPhoto>
                    <div>
                        <Photo src="./assets/press/hyperpup1.jpg" />
                    </div>
                    
                </PressPhoto>
            </Flex>
            
        </Parent>
    )
}