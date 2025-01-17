import { Flex } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SocialButton from "../components/SocialButton";
import { Helmet } from 'react-helmet';

export default function Release() {
    const { title } = useParams();
    const [d, sD] = useState(null);

    const handle = async () => {
        let f1 = await fetch("https://raw.githubusercontent.com/h3llo-wor1d/static.hyperpup.pet/refs/heads/main/feed.json")
        let f2 = await f1.json();
        let o = f2.releases.filter(i => i.r === title);
        if (o[0] !== undefined) {
            sD(o[0]);
            return;
        }
        window.location = "/404"
        
    }

    useEffect(() => {
        if (d === null) handle();
    }, [])

    const Profile = styled.div `
        text-align: center;
        overflow: hidden;
    `

    const Header = styled.div `
        display: block;
        text-align: center;
        font-family: Silkscreen Regular;
        font-size: 30pt;
        margin-bottom: 15px;
    `

    return (
        <div style={{margin: "30px"}}>
        {d !== null && 
        <div>
            <Helmet>
                <meta itemprop="name" content={`Stream ${d.name}`} />
                <meta itemprop="description" content=""/>
                <meta itemprop="image" content={`${window.location.origin}/assets/covers/${d.img}`} />

                <meta property="og:url" content="https://www.hyperpup.pet" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`Stream ${d.name}`} />
                <meta property="og:description" content="" />
                <meta property="og:image" content={`${window.location.origin}/assets/covers/${d.img}`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Stream ${d.name}`} />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content={`${window.location.origin}/assets/covers/${d.img}`} />
            </Helmet>
            <Flex justify={"center"}>
                <Profile>
                    <img src={`${window.location.origin}/assets/covers/${d.img}`} alt={d.img} height="250px"/>
                </Profile>  
            </Flex>
            <Header>
                Stream {d.name}
            </Header><br/>
            <Flex justify={"center"} align={"center"} vertical gap={"15px"}>
                <SocialButton 
                    name="Youtube Music" 
                    url={d.links[1].href}
                    color="#FA233B" 
                />
                <SocialButton 
                    name="Apple Music" 
                    url={d.links[0].href}
                    color="#FA233B" 
                />
                <SocialButton 
                    name="Spotify" 
                    url={d.links[2].href}
                    color="#1ED760" 
                />
            </Flex>
        </div>
        }
    </div>
    )
}