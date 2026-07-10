import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { clsx } from "clsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          VIN Decoder
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/variables"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            Variables
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
