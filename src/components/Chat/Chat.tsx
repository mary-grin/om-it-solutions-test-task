import { FC, useContext } from "react";

import { themeContext } from "@/context/ThemeContext";

import "./Chat.scss";

interface ChatProps {
  isOpen: boolean;
}

const Chat: FC<ChatProps> = ({ isOpen }) => {
  const { theme } = useContext(themeContext);
  return (
    <>
      {isOpen && (
        <div className={`chat__window ${theme}`}>
          <div className="chat__header">
            <div className="chat__info">
              <img
                src="public/chat-icons/chat-person.svg"
                alt="Chat Person Icon"
              />
              <div className="chat__title">
                <p className="chat__operator">eLearning company</p>
                <p className="chat__status">Operator is online</p>
              </div>
            </div>
            <img
              src="public/chat-icons/chat-details.svg"
              alt="Char Details Icon"
              className="chat__details"
            />
          </div>
          <div className="chat__footer">
            <hr className="chat__line"/>
            <div className="chat__text">
              <input className="chat__input" placeholder="Your Message..."/>
              <img src={`public/chat-icons/chat-attach-${theme}.svg`} alt="Chat Attach Icon" className="chat__attach"/>
              <img src={`public/chat-icons/chat-send-${theme}.svg`} alt="Chat Send Icon" className="chat__send"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
