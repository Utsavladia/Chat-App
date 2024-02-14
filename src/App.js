import { useEffect, useState } from "react";
import ChatScreen from "./ChatScreen";
import { socket } from "./Socket";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [name, setName] = useState("");
  const [chats, setChats] = useState([{}]);
  const handleStartChat = () => {
    setShowChat(!showChat);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    socket.connect();
    socket.emit("name", name);
    socket.on("newMessage", (m) => {
      setChats((prev) => [...prev, m]);
      console.log("chat is added in the chats array");
    });

    return () => {
      socket.off("newMessage");
      socket.disconnect();
    };
  }, [chats]);

  const handleMessageSend = (message) => {
    socket.emit("sendMessage", message);
  };

  return (
    <div className="App">
      <div className="w-full flex justify-evenly items-center py-10 min-h-lvh homepage ">
        <h1 className=" w-8/12 rounded-xl py-2 mb-2  fixed top-0 left-1/2 -translate-x-1/2  text-2xl font-bold text-orange-500 text-center bg-slate-800 border-b-2 border-black">
          Chat App
        </h1>
        {!showChat ? (
          <div className="flex flex-col w-auto h-auto items-center backdrop-blur-md px-36 py-24  rounded-2xl overflow-hidden ">
            <input
              placeholder="Enter name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-40 mb-6 border-4 border-gray-500 py-2 px-4 font-semibold rounded-lg"
            />
            <button
              onClick={handleStartChat}
              type="button"
              class="focus:outline-none text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:ring-orange-600 font-medium rounded-lg text-lg px-6 py-2.5 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-700"
            >
              Start Chatting
            </button>
          </div>
        ) : (
          <ChatScreen messages={chats} onMessageSend={handleMessageSend} />
        )}
      </div>
    </div>
  );
}

export default App;
