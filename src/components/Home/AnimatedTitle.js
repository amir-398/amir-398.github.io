import { useState, useEffect } from "react";
import React, { useRef } from "react";
import "./animatedTitle.css";

export default function AnimatedTitle({ text }) {
  const [lettersHtml, setLettersHtml] = useState("");
  const lettersRef = useRef([]);
  let textd = text.my_name;
  useEffect(() => {
    if (textd) {
      const titleText = textd;
      const letterSpans = titleText.split("").map((letter, i) => {
        if (letter === " ") {
          return (
            <span key={i} char=" " ref={(el) => (lettersRef.current[i] = el)}>
              &nbsp;
            </span>
          );
        } else {
          return (
            <span
              key={i}
              char={letter}
              ref={(el) => (lettersRef.current[i] = el)}
            >
              {letter}
            </span>
          );
        }
      });
      setLettersHtml(letterSpans);
    }
  }, [textd]);

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%*-+?";
  const shuffleLetters = (chars) => {
    return chars
      .split("")
      .sort(() => {
        return 0.5 - Math.random();
      })
      .join("");
  };
  chars = shuffleLetters(chars);
  const getRandomLetter = (except) => {
    while (true) {
      let randomChar = Math.trunc(Math.random() * chars.length);
      if (chars[randomChar] !== except) {
        return chars[randomChar];
      }
    }
  };
  const delay = (time) => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };
  async function decodeEffect(index, turn, node) {
    if (turn === 0) {
      node.textContent = chars[index];
    } else {
      node.textContent = chars[chars.length - 1 - index];
    }
    if (node.classList.contains("block")) {
      node.classList.remove("block");
    }
    if (node.classList.contains("box")) {
      node.classList.remove("box");
    }
    if (node.textContent === node.getAttribute("char")) {
      return;
    }
    const value = Math.trunc(Math.random() * 4);
    if (value === 0) {
      node.classList.add("block");
    } else if (value === 1) {
      node.classList.add("box");
    }
    await delay(50 + Math.trunc(Math.random() * 80));
    decodeEffect(index + 1, turn, node);
  }
  useEffect(() => {
    for (let i = 0; i < lettersRef.current.length; i++) {
      if (
        lettersRef.current[i] &&
        lettersRef.current[i].getAttribute("char") !== " "
      ) {
        decodeEffect(0, i % 2, lettersRef.current[i]);
      }
    }
  }, [lettersHtml]);

  return <h2 className="text-animation">{lettersHtml}</h2>;
}
