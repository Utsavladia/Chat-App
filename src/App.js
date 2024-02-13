import { useState } from "react";
import ChatScreen from "./ChatScreen";

function App() {
  const [showChat, setShowChat] = useState(false);
  const handleStartChat = () => {
    setShowChat(!showChat);
  };
  return (
    <div className="App">
      <h1 className="fixed top-0 left-1/2 -translate-x-1/2 text-xl font-bold text-green-700 text-center w-full">
        Chat App
      </h1>

      <div className="w-full flex justify-evenly items-center py-10 min-h-lvh">
        {!showChat ? (
          <button
            onClick={handleStartChat}
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Start Chatting
          </button>
        ) : (
          <ChatScreen />
        )}
      </div>
    </div>
  );
}

export default App;
