import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      {/* <h1 style={styles.title}>សូមស្វាគមន៍មកកាន់កម្មវិធីរបស់ពួកយើង</h1> */}
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>
          ទំព័រដើម
        </a>
        <a href="/About" style={styles.link}>
          អំពីខ្ញុំ
        </a>
        <a href="/contact" style={styles.link}>
          ទំនាក់ទំនង់
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "20px",
    textAlign: "center",
    color: "white",
    position: "sticky",
    top: "0px",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
  nav: {
    marginTop: "10px",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Header;
