interface HeaderProps {
  pageY: number;
}

import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { Link } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ pageY }) => {
  let mobileView = window.matchMedia("(max-width: 1024px)").matches;
  // console.log(mobileView);

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className="nav"
      style={
        !mobileView && pageY < 500
          ? { position: "absolute", width: "100%" }
          : !mobileView && pageY > 500
          ? {
              position: "fixed",
              transition: "1.5s",
              backgroundColor: "#272829",
              width: "100%",
            }
          : toggle
          ? { paddingBottom: "200px" }
          : undefined
      }
    >
      <FiArrowUp
        className="Up"
        style={pageY > 500 ? { display: "block" } : undefined}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <h1>
        <span>C'</span>LAB
      </h1>
      <ul>
        <li>
          <Link className="nav-link first-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Login
          </Link>
        </li>
      </ul>
      <img onClick={() => setToggle((pre) => !pre)} src="/images/toggle.png" />
    </nav>
  );
};

export default Header;
