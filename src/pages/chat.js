import ChatMessageCard from "@/components/ChatMessageCard/ChatMessageCard";
import { InputField } from "@/components/Forms/InputField";
import { Button } from "@/components/Global/Button/Button";
import { HeartIcon, LampIcon, LinkIcon, SendIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const allMessages = [
  { status: 'read', message: "Hey how are you ?", author: "me" },
  { status: 'arrived', message: "I need to ask you about ……….", author: "me" },
  { status: '', message: "I am fine ... ", author: "" },
  { status: 'send', message: "Did you check the new updates?", author: "me" },
];
const Chat = () => {
  const [messages, setMessages] = useState(allMessages);
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      setMessages((prev) => {
        return [...prev, { message, author: "me" }];
      });
      setMessage('')
    }
  };
  return (
    <Layout
      full
      title={fetchWord("chatting", lang)}
      headerClassName="ltr:rounded-br-[40px] rtl:rounded-bl-[40px]"
      containerClassName="relative h-32 !items-start"
      hideBottomMenu
      mainClassName="flex flex-col h-screen pt-[140px] -mt-[150px]"
    >
      <Image
        className="border-4 border-white rounded-full -mt-12 ml-8"
        src="/images/clients/Ellipse 182.png"
        alt="user avatar"
        height={110}
        width={110}
      />
      <div className="flex flex-col flex-1 overflow-auto scroll-hide">
      <div className="flex gap-2 items-center mt-4 text-lead capitalize">
        <span className="h-[1px] bg-gray-200 w-full block flex-1"></span>
        {fetchWord("today", lang)}
        <span className="h-[1px] bg-gray-200 w-full block flex-1"></span>
      </div>
      <div className="flex flex-1 flex-col gap-4 mt-4 mx-8">
        {messages?.map((msg, index) => (
          <ChatMessageCard key={`${msg?.author}${index}`} author={msg?.author} status={msg?.status}>
            {msg?.message}
          </ChatMessageCard>
        ))}
      </div>
        </div>
      <form
        onSubmit={sendMessage}
        className="flex gap-2 bg-white py-2 px-4 w-full fixed bottom-0 left-0 max-w-[575px] z-50"
      >
        <div className="relative !bg-[#1DA1F2] p-2 w-12 flex items-center justify-center  rounded-md">
          <input
            type="file"
            multiple
            className="opacity-0 z-10 absolute top-0 left-0 h-full w-full"
          />
          <LinkIcon />
        </div>
        <InputField
          name="message"
          value={message}
          classes="!p-2 flex-1"
          onChange={(e) => setMessage(e.target.value)}
          containerClassName="!mb-0"
        />
        <Button classes="!bg-primary !text-white !p-1 !w-16 flex !bg-[#1DA1F2] items-center justify-center">
          <SendIcon />
        </Button>
      </form>
    </Layout>
  );
};

export default Chat;
