import { useDispatch, useSelector } from "react-redux"
import ChatMessage from "./ChatMessage"
import LiveMessageSendInput from "./LiveMessageSendInput"
import { useEffect } from "react"
import { addMessage } from "../utils/LiveChatSlice"
import {randomNameGenerater,randomMessageGenerater} from '../utils/helper'

const LiveChatConatainer = ()=> {
    const chatData = useSelector((store)=>store.liveChat.message)
    console.log(chatData);

    const dispatch = useDispatch()

    useEffect(()=>{
        const pollingTimer = setInterval(()=>{
            console.log("API POLLING");
            dispatch(addMessage(
                {
                    userName:randomNameGenerater(),
                    message:randomMessageGenerater()
                }
            ))
        },500)

        return () => clearInterval(pollingTimer)
    },[])


    return(
        <div className="border flex flex-col justify-between p-4 w-full md:w-[30%] h-[650px] rounded-lg">
            <div>
            <h3 className="border-b mb-3 pb-3">Live Chat Replay</h3>
            <div className="overflow-y-auto h-[500px] flex flex-col-reverse">
                {
                    chatData.map((data)=><ChatMessage key={data.userName} userName={data.userName} message={data.message} />)
                }
            </div>
            </div>
            <div className="border-t mt-3 pt-3">
                <LiveMessageSendInput/>
            </div>
        </div>
    )
}
export default LiveChatConatainer