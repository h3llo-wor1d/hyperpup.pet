import { useEffect, useState } from "react";

export default function Redirect(props) {
    const [safe, setSafe] = useState("Please wait...");
    const redirectURI = window.location.origin === "http://localhost:3000" ? 
    "http://localhost:3000/redirect" :
    "https://hyperpup.pet/redirect";


    async function handleAuth() {
        var hash = window.location.hash.substr(1);

        var result = hash.split('&').reduce(function (res, item) {
        var parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
        }, {});
        localStorage.setItem("discordtoken", result.access_token);
        /*let f1 = await fetch("https://discord.com/api/v10/users/@me", {
            headers: {
                Authorization: `Bearer ${result.access_token}`
            }
        })
        let f2 = await f1.json()
        console.log(JSON.stringify(f2, null, 4));*/
        setSafe("You may now close this window.");
    }

    const onUnload = e => {
        e.preventDefault();
        e.returnValue = '';
        window.opener.location.reload(true);
        window.location.reload();
    }

    useEffect(() => {
        handleAuth();
        window.onbeforeunload = onUnload;
    }, [])
    
    return (
        <div>
            {safe}
        </div>
    )
}