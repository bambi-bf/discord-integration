"use client";

import Image from "next/image";
import React from "react";

const DashboardPage: React.FC = () => {
  const currentUserName = "user1";
  const servers = [
    { avatar: "1.png", name: "comp1" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "2.jpeg", name: "comp2" },
  ];
  const friends = [
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "2.jpeg", name: "comp2" },
  ];
  const pendings = [
    { avatar: "1.png", name: "comp1" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "2.jpeg", name: "comp2" },
    { avatar: "1.png", name: "comp1" },
    { avatar: "2.jpeg", name: "comp2" },
  ];
  const onlineUsers = [
    { avatar: "1.png", name: "comp1" },
    { avatar: "2.jpeg", name: "comp2" },
  ];
  const chats = [
    { name: "user1", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user1", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user1", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user1", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user1", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user1", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
    { name: "user2", text: "Hello, how are you?" },
  ];

  const chattingMode = ["General Chat", "Direct Messages"];

  const handleAddFriend = () => {
    console.log("add friend");
  };

  const onMsgSubmit = () => {
    console.log("message sent");
  };

  return (
    <>
      <div className="flex h-screen max-sm:flex-col">
        <div className="w-[70px] bg-slate-700 flex flex-col items-start max-sm:w-screen max-sm:h-[70px] max-sm:flex-row ">
          <div className="min-h-[70px] min-w-[70px] bg-slate-800"></div>
          <div className="flex flex-col h-full max-sm:flex-row overflow-auto max-sm:overflow-y-hidden overflow-x-hidden max-sm:overflow-x-auto">
            {/* avatar image -> convert to array */}
            {servers.map((server, i) => (
              <Image
                key={i}
                src="/image/1.png"
                className="rounded-lg m-2 max-sm:mb-0 shadow-lg"
                height={55}
                width={55}
                alt="Avatar"
              />
            ))}
          </div>
        </div>

        <div className="w-[240px] flex flex-col bg-slate-600">
          <div className="h-2/3 bg-slate-500 flex flex-col max-sm:w-screen overflow-auto max-sm:h-[70px]  max-sm:flex-row">
            <div className="min-h-[70px] max-sm:min-w-[70px]  sm:w-full bg-slate-800">
              <div className="flex items-start ml-2 max-sm:min-w-[50px] max-sm:min-h-[50px] max-sm:overflow-y-hidden ">
                <Image
                  src="/image/1.png"
                  className="rounded-full mt-2 shadow-lg"
                  height={55}
                  width={55}
                  alt="Avatar"
                />
                <div className="ml-3 flex flex-col items-center max-sm:hidden">
                  <h5 className="mb-1 mt-2 text-xl font-medium leading-tight text-center">
                    Rabnail
                  </h5>
                  <p className="text-white dark:text-neutral-400 text-center">
                    Web developer
                  </p>
                </div>
              </div>
            </div>
            {/* avatar with name -> convert to array */}
            <div className="overflow-auto h-full w-full flex flex-col max-sm:flex-row">
              {friends.map((friend, i) => (
                <div
                  className="flex items-start ml-2 max-sm:min-w-[50px] max-sm:min-h-[50px] max-sm:overflow-y-hidden "
                  key={i}
                >
                  <Image
                    src="/image/2.jpeg"
                    className="rounded-full mt-2 shadow-lg"
                    height={55}
                    width={55}
                    alt="Avatar"
                  />
                  <div className="ml-3 flex flex-col items-center max-sm:hidden">
                    <h5 className="mb-1 mt-2 text-xl font-medium leading-tight text-center">
                      John Doe
                    </h5>
                    <p className="text-white dark:text-neutral-400 text-center">
                      Web designer
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-400 h-1/3 flex flex-col justify-center items-start max-sm:w-screen max-sm:flex-row max-sm:h-[80px] overflow-auto  border-double border-t-4 border-slate-500">
            {pendings.map((friend, i) => (
              <div className="flex items-start m-2" key={i}>
                <Image
                  src="/image/2.jpeg"
                  className="rounded-full mt-2 shadow-lg"
                  height={55}
                  width={55}
                  alt="Avatar"
                />
                <div className="ml-3 flex flex-col items-center max-sm:hidden">
                  <h5 className="mb-1 mt-2 text-xl font-medium leading-tight text-center">
                    John Doe
                  </h5>
                  <p className="text-white dark:text-neutral-400 text-center">
                    Web designer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Chatting area */}
        <div className="grow bg-slate-600 flex flex-col items-start">
          <div className=" flex justify-between p-3 min-h-[70px] w-full bg-slate-800 max-sm:hidden">
            <p className="text-white display-4 pt-3">{chattingMode[0]}</p>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block rounded-full hover:bg-blue-800 hover:text-slate-800 bg-opacity-50 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Join Server
            </button>
          </div>
          <div className="w-full h-full flex flex-col items-start overflow-auto">
            {chats.map((chat, i) => {
              const flexStyle =
                chat.name === currentUserName ? "flex-end" : "flex-start";
              return (
                <div
                  key={i}
                  className="bg-slate-300 m-3 block w-3/4 rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  style={{
                    alignSelf: flexStyle,
                  }}
                >
                  <div className="p-4 flex flex-row items-center">
                    <Image
                      src="/image/2.jpeg"
                      alt="avatar"
                      className="rounded-lg mt-2 shadow-lg mr-4 max-sm:hidden"
                      width={40}
                      height={40}
                    />
                    <p className="text-base text-neutral-600 dark:text-neutral-200">
                      This is some text within a card body.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="w-full p-4 relative bg-slate-200 mb-1 rounded-md"
            data-te-input-wrapper-init
          >
            <form onSubmit={onMsgSubmit}>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-slate-300 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputHelper"
                placeholder="Example label"
              />
              <label
                htmlFor="exampleFormControlInputHelper"
                className="pointer-events-none absolute left-6 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Write the message here
              </label>
            </form>
          </div>
        </div>

        <div className="w-[240px] flex flex-col bg-slate-700 max-md:hidden md:block border-double border-l-4 border-slate-500">
          <p className="p-2 text-center">online member: 13545</p>
          {onlineUsers.map((friend, i) => (
            <div
              className="flex items-start m-2  border-solid border-b-2 border-slate-600 pb-2"
              key={i}
            >
              <Image
                src="/image/2.jpeg"
                className="rounded-full mt-2 shadow-lg"
                height={55}
                width={55}
                alt="Avatar"
              />
              <div className="ml-3 flex flex-col items-center max-sm:hidden">
                <h5 className="mb-1 mt-2 text-xl font-medium leading-tight text-center">
                  John Doe
                </h5>
                <p className="text-white dark:text-neutral-400 text-center">
                  Web designer
                </p>
              </div>
              <button
                type="button"
                className="mt-2 ml-2 inline-block rounded-full  border-2 border-info-500  bg-info px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                onClick={handleAddFriend}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
