import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import Login from "../sections/login";
import { useEffect, useState } from "react";
import { Flex } from "antd";

export default function Tickets(props) {
    const { event } = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isTicketPaid, setIsTicketPaid] = useState(false);
    const [userDetails, setUserDetails] = useState([]);

    function createOrder() {
        return fetch("http://localhost:30014/create-ticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("discordtoken")
            },
            body: JSON.stringify({
                cart: [
                    {
                        id: "fc1",
                        quantity: "1",
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    }

    useEffect(() => {
        if (typeof(localStorage.getItem("discordtoken")) === "string") {
            setIsLoggedIn(true);
            fetch("https://discord.com/api/v10/users/@me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("discordtoken")}`
            }
        }).then(result => result.json())
        .then(out => {
            console.log(JSON.stringify(out, null, 4))
            setUserDetails([`https://cdn.discordapp.com/avatars/${out.id}/${out.avatar}.webp`, out.global_name])
        })
        }
    }, [])

    function onApprove(data) {
          return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then((response) => response.json())
          .then((orderData) => {
                const name = orderData.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
          });

    }

    return (
        isLoggedIn ?
            isTicketPaid ?
            <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px", flexDirection: "column"}}>
                placeholder for paid tickets!
            </Flex> :

            <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px", flexDirection: "column"}}>
                <div style={{width: "500px"}}>
                    <div style={{height: "200px", width: "500px", overflow: "hidden", position: "relative", marginBottom: "10px"}}>
                        <img src="https://cdn.prod.website-files.com/66a5d1be7d8d11df6dcbcd78/678e9943660850e0f620fe32_IMG_1199.jpg" alt="venueImage" width="100%" />
                        <img src={userDetails[0]} alt="userPFP" style={{borderRadius: "1000px", border: "solid 4px #121212", position: "absolute", zIndex: "999", top: 0, right: 0}} height="75px"/>
                        <div style={{height: "50px", width: "50px", position: "absolute", zIndex: "998", top: 0, right: 0, backgroundColor: "#121212"}}></div>
                    </div>
                    HYPERPUP PRESENTS: FURCON5<br/>
                    BLACK BOX @ THE SUPERMARKET ATL<br/>
                    9:00PM EST TO 1:00AM EST<br/>
                    MONDAY, JUNE 30TH 
                </div>
                <div style={{width: "500px"}}>
                    <PayPalScriptProvider options={{ clientId: "AQglNapVm-GbRIxKrouwrgUlL3pCmKTyyrZlLxKF9J23bHZ0YIU-OSFFi7xwm4dofzTYWVgjWl1wkLQT", currency: "USD", intent: "capture"}}>
                        <PayPalButtons
                            createOrder={createOrder}
                            onApprove={onApprove} />
                    </PayPalScriptProvider>
                </div>
            </Flex>
        :

        <div>
            <Login />
        </div>
    )
}