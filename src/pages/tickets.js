import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import Login from "../sections/login";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import QRCode from "react-qr-code";

export default function Tickets(props) {
    const { event } = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ticketHash, setTicketHash] = useState(false);
    const [eventData, setEventData] = useState([]);

    function createOrder() {
        return fetch("https://api.hyperpup.pet/create-ticket", {
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

    const initLogic = async () => {
        let g1 = await fetch('https://raw.githubusercontent.com/h3llo-wor1d/static.hyperpup.pet/refs/heads/main/events.json')
        let g2 = await g1.json();
        
        if (g2.events.filter(e => e.id === event).length === 0) {
            window.location = "/404"
        } else {
            setEventData(g2.events.filter(e => e.id === event)[0])
        }

        

        let f1 = await fetch('https://api.hyperpup.pet/read-account',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userid: localStorage.getItem("discordid"), 
                token: localStorage.getItem("hypertoken")
            })
        })
        let f2 = await f1.json();
        if (f2.message.ticketStorage.filter(i => i.event == event).length !== 0) {
            console.log("Event found!");
            setTicketHash(f2.message.ticketStorage.filter(i => i.event == event)[0].ticketHash);
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        if (typeof(localStorage.getItem("hypertoken")) === "string") {
            initLogic();
        }
    }, [])

    function onApprove(data) {
          return fetch("https://api.hyperpup.pet/capture-ticket", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID,
              orderEvent: event,
              userID: localStorage.getItem("discordid")
            })
          })
          .then((response) => response.json())
          .then((orderData) => {
            try {
                if (orderData.ticketHash !== undefined) {
                    setTicketHash(orderData.ticketHash);
                }
            } catch {
                console.log("Error setting event!")
            }
          });

    }

    return (
            isLoggedIn ?
            <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px", flexDirection: "column"}}>
                <div style={{width: "500px", maxWidth: "100%"}}>
                    <div style={{height: "200px", width: "500px", maxWidth: "100%", overflow: "hidden", position: "relative", marginBottom: "10px"}}>
                        <img src={eventData.details.venueImage} alt="venueImage" width="100%" />
                        {/*<img src={userDetails[0]} alt="userPFP" style={{borderRadius: "1000px", border: "solid 4px #121212", position: "absolute", zIndex: "999", top: 0, right: 0}} height="75px"/>
                        <div style={{height: "50px", width: "50px", position: "absolute", zIndex: "998", top: 0, right: 0, backgroundColor: "#121212"}}></div>*/}
                    </div>
                    {eventData.details.name}<br/>
                    {eventData.details.location}<br/>
                    {eventData.details.time}<br/>
                    {eventData.details.date}
                </div>
                {
                ticketHash ?
                <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px", flexDirection: "column"}}>
                    <div style={{textAlign: "center"}}>
                    Your ticket(s) for the upcoming FURCON5 event
                    </div>
                    <QRCode value={ticketHash} />
                    <div style={{textAlign: "center"}}>
                    DO NOT SHARE THIS QR CODE WITH ANYONE UNLESS IF YOU SELL IT!
                    </div>
                </Flex> :
                <div style={{width: "500px"}}>
                    <PayPalScriptProvider options={{ clientId: "ARNS0hchUCLifh1BT_lNT1J8dgsFjkjma9E2a5nRpD34FKVZqdkApyJIIq2aCPsKN-EhMfaSmpAcM-fg", currency: "USD", intent: "capture"}}>
                        <PayPalButtons
                            createOrder={createOrder}
                            onApprove={onApprove} />
                    </PayPalScriptProvider>
                </div>
                }
            </Flex>
        :

        <div>
            <Login />
        </div>
    )
}