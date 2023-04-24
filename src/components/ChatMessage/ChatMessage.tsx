import {FC} from "react";

import "./ChatMessage.scss"

interface ChatMessageProps {
  text: string,
  isUser: boolean,
  date: string
}

const ChatMessage: FC<ChatMessageProps> = ({text, date, isUser}) => {
    return (
      <div className={`message ${isUser ? "user" : "operator"}`}>
        <p className="message__text">{text}</p>
        <span className="message__time">{date}</span>
      </div>
    )
}

export default ChatMessage;