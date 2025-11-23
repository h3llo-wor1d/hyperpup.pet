import { Button, Form, Input } from "antd"
import { useEffect, useRef, useState } from "react";
import song from "../arg/password/song.json";
import date from "../arg/password/date.json";
import styled from "styled-components";

const CHUNK_SIZE = 0x8000; 

function uint8ArrayToBase64(u8) {
let parts = [];
for (let i = 0; i < u8.length; i += CHUNK_SIZE) {
    parts.push(String.fromCharCode.apply(null, u8.subarray(i, i + CHUNK_SIZE)));
}
return btoa(parts.join(''));
}

function base64ToUint8Array(base64) {
const bin = atob(base64);
const len = bin.length;
const u8 = new Uint8Array(len);
for (let i = 0; i < len; i += CHUNK_SIZE) {
    const end = Math.min(i + CHUNK_SIZE, len);
    for (let j = i; j < end; j++) u8[j] = bin.charCodeAt(j);
}
return u8;
}

function randomBytes(length) {
const b = new Uint8Array(length);
crypto.getRandomValues(b);
return b;
}

async function deriveAesKeyFromPassword(password, salt, iterations = 200000) {
const enc = new TextEncoder();
const passKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
);

return crypto.subtle.deriveKey(
    {
    name: 'PBKDF2',
    salt,
    iterations,
    hash: 'SHA-256'
    },
    passKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
);
}



export default function Password(props) {
    const [isWrong, setIsWrong] = useState(false);
    const [form] = Form.useForm();
    const [dateDecrypted, setDateDecrypted] = useState(false);

    async function decryptBase64WithPassword(encryptedObj, password) {
        if (!encryptedObj || !encryptedObj.salt || !encryptedObj.iv || !encryptedObj.data) {
          throw new Error('Encrypted object must have base64 salt, iv and data.');
        }
      
        const salt = base64ToUint8Array(encryptedObj.salt);
        const iv = base64ToUint8Array(encryptedObj.iv);
        const data = base64ToUint8Array(encryptedObj.data);
      
        const key = await deriveAesKeyFromPassword(password, salt);
      
        let decrypted;
        try {
          const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
          decrypted = new Uint8Array(plainBuf);
        } catch (err) {
          setIsWrong(true);
          return false;
        }
      
        return uint8ArrayToBase64(decrypted);
      }


    const playAudio = async (secret) => {
        if (form.getFieldValue('value').replace(" ", "") === "rawmeat") window.location="https://www.youareanidiot.cc/";
        const recoveredBase64 = await decryptBase64WithPassword(song, form.getFieldValue('value'));
        if (recoveredBase64) {
            setDateDecrypted(await decryptBase64WithPassword(date, form.getFieldValue('value')))
            var snd = new Audio("data:audio/ogg;base64,"+recoveredBase64);
            snd.play();
            snd.addEventListener('ended', () => {
                window.location.pathname = ""
            });
        }  
    }
    const LayoutContent = styled.div `
    width: 95%;
    text-align: center;
    height: fit-content;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25pt;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

    const ObjRedirect = () => {
        useEffect(() => {
            setTimeout(() => {
                window.location.pathname = ""
            }, 2500)
        }, [])
        return (
            <div style={{textAlign: "center"}}>
                so close yet so far...
            </div>
        )
    }

    return (
        <LayoutContent>
            {
                isWrong ?
                <ObjRedirect></ObjRedirect> :
            <div style={{width: "300px"}}>
                {dateDecrypted ?
                <div style={{textAlign: "center"}}>
                    {atob(dateDecrypted)}
                </div> :
                <Form form={form}>
                    <Form.Item name="value" key="value2">
                        <Input key="value1" />
                    </Form.Item>
                    <Button onClick={playAudio}>hello</Button>
                </Form>}
            </div>
            }
            
        </LayoutContent>
    )
}