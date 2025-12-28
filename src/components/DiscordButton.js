import DiscordIcon from '../svg/discord.svg';
import { useEffect } from 'react';

export default function DiscordButton(props)  {

    useEffect(() => {
        console.log(window.location.origin);
    }, [])
    
    const handleLogin = () => {
        let newwindow=window.open("https://discord.com/oauth2/authorize?response_type=token&client_id=1373351979958665349&scope=identify" ,'name','height=700,width=900');
        if (window.focus) {newwindow.focus()}
    }

    return (
        <div 
            className="socialLoginButton" 
            style={{backgroundColor: "#5165F6", color: "white"}}
            onClick={handleLogin}
        >
            <div style={{lineHeight: "normal", verticalAlign: "middle", height: "24px"}} >
                <img style={{verticalAlign: "middle", height: "24px", marginRight: "15px"}} src={DiscordIcon} alt={"discord"} />
                <span>Sign In To Continue</span>
            </div>
        </div>
    )
}