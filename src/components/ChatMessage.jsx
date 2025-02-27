import { useSelector } from "react-redux"

const ChatMessage = ({userName,message}) => {

    

    return (
        <div className="flex py-2 gap-3 items-start">
            <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/72294440?v=4" alt="user" />
            <div>
                <strong className="mr-2">{userName}</strong>
                <span>{message}</span>
            </div>
        </div>
    )
}
export default ChatMessage