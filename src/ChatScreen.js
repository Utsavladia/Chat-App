import React, { useEffect, useRef, useState } from "react";

const ChatScreen = ({ messages, onMessageSend }) => {
  const [inputText, setInputText] = useState("");
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      onMessageSend(inputText);
      console.log("message send");
      setInputText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
    <div className="w-full flex justify-evenly">
      <h1 className=" w-8/12 rounded-xl py-2 mb-2 fixed top-0 left-1/2 -translate-x-1/2  text-2xl font-bold text-orange-500 text-center bg-slate-800 border-b-2 border-black">
        Chat App
      </h1>
      <div className=" bg-slate-800 min-h-[80vh] w-8/12 px-4 py-4 pb-24">
        {messages.map((message, index) => (
          <div
            className=" bg-sky-600 py-1 px-4 w-fit max-w-[50%] rounded-lg text-lg font-semibold mb-4 rounded-tl-none "
            key={index}
          >
            {message.sender}
            {message.message}
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 inset-x-0 h-auto flex items-center justify-center gap-4 py-4 px-4 bg-slate-700">
        <textarea
          ref={textareaRef}
          rows={1}
          className="font-medium rounded-xl text-lg px-8 py-1.5 w-1/2 resize-none "
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type Something..."
        />
        <button
          onClick={handleSendMessage}
          type="button"
          class="focus:outline-none text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:ring-orange-600 font-medium rounded-xl text-lg px-8 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-green-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
