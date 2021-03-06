import React ,{useEffect,useState} from 'react'
import './Chat.css'
import SearchOutlined from'@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from'@material-ui/icons/MoreVert'
import { Avatar,IconButton } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input,setInput]=useState('');
    const [seed,setSeed]=useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[])
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log("You typed >>>",input)
        setInput("");
    }
    return (
        <div className="chat">
           <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
           </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Sunny Songha</span>
                    Hey Guys
                    <span className="chat__timestamp">3:14</span>
                </p>
                
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Text a message" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
