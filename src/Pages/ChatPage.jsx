import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const ChatPage = () => {
//   const [chats, setChats] = useState([]);
//   const fetchChats = async () => {
//     //original: working as of 13th march
//     // const { data } = await axios.get("/api/chat");
//     const data = await axios.get("/api/chat");

//     //changed by me
//     // const { data } = await axios.get("/api/chats");
//     //
//     setChats(data);
//     // console.log(data);
//   };

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   return (
//     //{ {chats.map((chat) => {
//     //        return chat.chatName;
//     //})} }
//     <div>
//       {chats.map((chat) => (
//         <div key={chat._id}>{chat.chatName}</div>
//       ))}
//     </div>
//   );
// };

// export default ChatPage;
