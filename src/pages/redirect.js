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
        let f1 = await fetch("http://localhost:3001/create-account", 
        {method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({token: result.access_token})
        });
        let f2 = await f1.json();
        if (f2.status === 200) {
            console.log(f2)
            localStorage.setItem("hypertoken", f2.message.token);
            localStorage.setItem("discordid", f2.message.id);
        }
        
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