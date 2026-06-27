import { ChevronDown, PanelLeftOpen, PanelLeftClose } from "lucide-react";
import styles from "./ChatHeader.module.css";

export default function ChatHeader({ onMenuClick, sidebarOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* Toggle button — works on both desktop and mobile */}
        <button
          className={styles.menuBtn}
          onClick={onMenuClick}
          title="Toggle sidebar"
        >
          {sidebarOpen ? (
            <PanelLeftClose size={20} />
          ) : (
            <PanelLeftOpen size={20} />
          )}
        </button>
        <span>ChatGPT</span>
        <ChevronDown size={16} />
      </div>
      <div className={styles.right}>
        <div className={styles.avatar}>IT</div>
      </div>
    </header>
  );
}
