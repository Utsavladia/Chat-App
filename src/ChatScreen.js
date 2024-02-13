import React, { useEffect, useRef, useState } from "react";

const ChatScreen = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("message send");
    setInputText("");
  };
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputText]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="">
      <div className="">messages</div>
      <div className="fixed bottom-0 inset-x-0 h-auto flex items-center justify-center gap-4 py-4 px-4 bg-zinc-700">
        <textarea
          ref={textareaRef}
          rows={1}
          className="font-medium rounded-xl text-lg px-8 py-1.5 w-1/2 resize-none "
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type Something..."
        />
        <button
          onClick={handleSendMessage}
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-lg px-8 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
