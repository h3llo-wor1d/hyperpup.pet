import { Flex } from "antd";
import DiscordButton from "../components/DiscordButton";

export default function Login(props) {
    return (
        <div>
            <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px", flexDirection: "column"}}>
                <div style={{fontSize: "15pt"}}>
                    In order to identify the owner of tickets, we are using basic Discord information (accountid) unique to each person to associate tickets.<br/>
                    To proceed with your purchase, please continue using the button below:
                </div>
            <DiscordButton />
            </Flex>
            
        </div>
    )
}