import "./App.css";
import React, { useState } from "react";
import {
  FaGoogle,
  FaLinkedinIn,
  FaYoutube,
  FaAmazon,
  FaGithub,
} from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

const data = [
  {
    name: "Google",
    url: ["https://www.google.com"],
  },
];

const data1 = [
  {
    name: "Youtube",
    url: ["https://www.youtube.com"],
  },
];
const data2 = [
  {
    name: "Amazon",
    url: ["https://www.amazon.com"],
  },
];
const data3 = [
  {
    name: "Netflix",
    url: ["https://www.netflix.com"],
  },
];
const data4 = [
  {
    name: "LinkedIn",
    url: ["https://www.linkedin.com"],
  },
];
const data5 = [
  {
    name: "Github",
    url: ["https://www.github.com"],
  },
];
function App() {
  const [lists, setLists] = useState(data);
  const [lists1, setLists1] = useState(data1);
  const [lists2, setLists2] = useState(data2);
  const [lists3, setLists3] = useState(data3);
  const [lists4, setLists4] = useState(data4);
  const [lists5, setLists5] = useState(data5);

  const openTabs = (url) => {
    for (const link of url) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="App">
      <h3>Choose Your App List</h3>

      <div className="lists">
        {lists &&
          lists.map((item) => {
            return (
              <button
                className="button"
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                <FaGoogle />

                {item.name}
              </button>
            );
          })}

        {lists1 &&
          lists1.map((item) => {
            return (
              <button
                className="button1"
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                <FaYoutube color="black " />
                {item.name}
              </button>
            );
          })}
        {lists2 &&
          lists2.map((item) => {
            return (
              <button
                className="button2"
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                {" "}
                <FaAmazon className="amazon" color="black " />
                {item.name}
              </button>
            );
          })}
        {lists3 &&
          lists3.map((item) => {
            return (
              <button
                className="button3"
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                {" "}
                <RiNetflixFill />
                {item.name}
              </button>
            );
          })}
        {lists4 &&
          lists4.map((item) => {
            return (
              <button
                className="button4"
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                <FaLinkedinIn></FaLinkedinIn>
                {item.name}
              </button>
            );
          })}
        {lists5 &&
          lists5.map((item) => {
            return (
              <button
                className="button5"
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                <FaGithub />

                {item.name}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
