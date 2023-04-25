import { useState } from "react";

import Chat from "@/components/Chat/Chat";

import "./ChatBlock.scss";

const ChatBlock = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <div className="chat">
        <Chat isOpen={isOpen} />
        <div
          className={`chat__icon${isOpen ? " inactive" : " active"}`}
          onClick={() => setIsOpen((state) => !state)}
        >
          <img src="img/chat-icon.svg" />
        </div>
      </div>
  );
};

export default ChatBlock;
