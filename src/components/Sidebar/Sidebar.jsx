import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { MdHistory, MdOutlineMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const contextValue = useContext(Context);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = contextValue;

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <div className={styles.menu}>
            <MdOutlineMenu
              onClick={() => setExtended(!extended)}
              className={styles.icon}
            />
          </div>
          <div onClick={() => newChat()} className={styles.newChat}>
            <FaPlus className={styles.icon} />
            {extended ? <p>New Chat</p> : ""}
          </div>
          {extended ? (
            <div className={styles.recents}>
              <p className={styles.recentTitle}>Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    key={index}
                    className={styles.recentEntry}
                  >
                    <FiMessageSquare className={styles.icon} />
                    <p>{item.slice(0, 18)}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.bottom}>
          <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
            <IoMdHelpCircleOutline className={styles.icon} />
            {extended ? <p>Help</p> : ""}
          </div>
          <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
            <MdHistory className={styles.icon} />
            {extended ? <p>Activity</p> : ""}
          </div>
          <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
            <IoSettings className={styles.icon} />
            {extended ? <p>Settings</p> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
