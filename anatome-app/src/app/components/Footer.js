import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-social">
          <a href="https://github.com/SushantChhetry">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/sushantchhetry/">
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/SushantChhetryy">
            <AiFillTwitterCircle />
          </a>
        </div>
        <p>&copy; 2023 Sushant and Sakshyat. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
