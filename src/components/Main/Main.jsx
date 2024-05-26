import React, { useContext } from "react";
import styles from "./Main.module.css";
import { FaLightbulb, FaMicrophone, FaRegCompass } from "react-icons/fa6";
import { MdDraw, MdImageSearch } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { Context } from "../../context/Context";

function Main() {
  const contextValue = useContext(Context);
  const {
    onSent,
    recentPrompt,
    setInput,
    input,
    resultData,
    showResult,
    loading,
  } = contextValue;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.nav}>
          <p>Gemini</p>
          <img src="/images/user.jpg" />
        </div>
        <div className={styles.mainContainer}>
          {!showResult ? (
            <>
              <div className={styles.greet}>
                <p>
                  <span>Hello, MKH</span>
                </p>
                <p>How can i help you today?</p>
              </div>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <p>Suggest beautiful places to see on an upcoming trip</p>
                  <FaRegCompass className={styles.icon} />
                </div>
                <div className={styles.card}>
                  <p>
                    Outline an organized & logical sales pitch for a new product
                  </p>
                  <MdDraw className={styles.icon} />
                </div>
                <div className={styles.card}>
                  <p>What are tips to improve public speaking skills?</p>
                  <FaLightbulb className={styles.icon} />
                </div>
                <div className={styles.card}>
                  <p>Give me ideas for what to do with what's in this image?</p>
                  <MdImageSearch
                    onClick={() => onSent()}
                    className={styles.icon}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.result}>
                <div className={styles.resultTitle}>
                  <img src="/images/user.jpg" />
                  <p>{recentPrompt}</p>
                </div>
                <div className={styles.resultData}>
                  <img src="/images/logo.png" />
                  {loading ? (
                    <div className={styles.loader}>
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.mainBottom}>
          <div className={styles.search}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <IoMdImages className={styles.icon} />
              <FaMicrophone className={styles.icon} />
              <LuSendHorizonal
                onClick={() => onSent()}
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
