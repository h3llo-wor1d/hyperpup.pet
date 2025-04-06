import styled from "styled-components"

export default function Header() {
    const HeaderBar = styled.div `
    text-align: center;
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    `

    const Image = styled.img `
    width: auto;
    @media screen and (max-width: 950px) {
        display:none;
    }
    `
    const Image2 = styled.img `
    display: none;
    @media screen and (max-width: 950px) {
        display:inline-block;
    }
    `

    const Twirl = styled.img `
    height: 60pt;   
    `
    return (
        <HeaderBar>
            <Twirl src="./y2k_twirl.gif" alt="y2k_twirl" />
            <div>
                <Image src="./cooltext.png" alt="cooltext" />
                <Image2 src="./cooltext-mobile.png" alt="cooltext" />
            </div>
            <Twirl src="./y2k_twirl.gif" alt="y2k_twirl" />
        </HeaderBar>
    )
}