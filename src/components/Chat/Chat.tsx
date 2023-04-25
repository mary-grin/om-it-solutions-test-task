import { FC, useContext, useEffect, useRef, useState } from "react";

import { themeContext } from "@/context/ThemeContext";

import ChatMessage from "@/components/ChatMessage/ChatMessage"

import "./Chat.scss";

interface ChatProps {
  isOpen: boolean;
}

interface ChatMessage {
  text: string,
  isUser: boolean,
  date: string
}

const Chat: FC<ChatProps> = ({ isOpen }) => {
  const { theme } = useContext(themeContext);
  const messagesRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, )

  const sendMessage = () => {
    if(message) {
      setMessages(state => {
        const now = Date.now();
        const dateObj = new Date(now);
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();

        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        return [...state, {text: message, isUser: true, date: timeString}]
      })
      setMessage('')
    }
  };

  return (
    <>
      {isOpen && (
        <div className={`chat__window ${theme} active`}>
          <div className="chat__header">
            <div className="chat__info">
              <img src="/img/chat-person.svg" alt="Chat Person Icon" />
              <div className="chat__title">
                <p className="chat__operator">eLearning company</p>
                <p className="chat__status">Operator is online</p>
              </div>
            </div>
            <img
              src="/img/chat-details.svg"
              alt="Char Details Icon"
              className="chat__details"
            />
          </div>
            <div className="chat__content" ref={messagesRef}>
              <div className="chat__messages" >
                {messages.map((item, i) =>
                  <ChatMessage key={i} text={item.text} date={item.date} isUser={item.isUser}/>
                )}
              </div>
          </div>
          <div className="chat__footer">
            <hr className="chat__line" />
            <form className="chat__text" onSubmit={(e) => e.preventDefault()}>
              <input
                className="chat__input"
                placeholder="Your Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? sendMessage() : null}
              />
              <img
                src={`/chat-icons/chat-attach-${theme}.svg`}
                alt="Chat Attach Icon"
                className="chat__attach"
              />
              <button
                type="button"
                onClick={sendMessage}
                className="chat__submit"
              >
                <img
                  src={`/chat-icons/chat-send-${theme}.svg`}
                  alt="Chat Send Icon"
                  className="chat__send"
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
