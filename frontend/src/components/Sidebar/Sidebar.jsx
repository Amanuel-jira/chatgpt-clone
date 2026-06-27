import {
  MessageSquare,
  Search,
  Image as ImageIcon,
  LayoutGrid,
  Microscope,
  Code2,
  FolderKanban,
  PanelLeftClose,
} from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoText}>ChatGPT</span>
        </div>
        {/* Close button — clicking collapses sidebar */}
        <button
          className={styles.iconBtn}
          onClick={onClose}
          title="Close sidebar"
        >
          <PanelLeftClose size={20} />
        </button>
      </div>

      <nav className={styles.nav}>
        <a href="#" className={styles.item}>
          <MessageSquare size={18} />
          <span className={styles.label}>New chat</span>
        </a>
        <a href="#" className={styles.item}>
          <Search size={18} />
          <span className={styles.label}>Search chats</span>
        </a>
        <a href="#" className={styles.item}>
          <ImageIcon size={18} />
          <span className={styles.label}>Images</span>
        </a>
        <a href="#" className={styles.item}>
          <LayoutGrid size={18} />
          <span className={styles.label}>Apps</span>
        </a>
        <a href="#" className={styles.item}>
          <Microscope size={18} />
          <span className={styles.label}>Deep research</span>
        </a>
        <a href="#" className={styles.item}>
          <Code2 size={18} />
          <span className={styles.label}>Codex</span>
        </a>
        <a href="#" className={styles.item}>
          <FolderKanban size={18} />
          <span className={styles.label}>Projects</span>
        </a>
      </nav>
    </aside>
  );
}
