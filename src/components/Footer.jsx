import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright  ⓒ {year} Made with ❤️ by Ryan Lucas</p>
    </footer>
  );
}

export default Footer;
