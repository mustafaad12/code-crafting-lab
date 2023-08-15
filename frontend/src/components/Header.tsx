interface HeaderProps {
  pageY: number;
}

import { useState } from "react";

import { Link } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ pageY }) => {
  let mobileView = window.matchMedia("(max-width: 1024px)").matches;
  // console.log(mobileView);

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className="nav"
      style={
        !mobileView && pageY > 500
          ? {
              position: "fixed",
              transition: "1.5s",
              backgroundColor: "#C1ECE4",
              width: "100%",
            }
          : toggle
          ? { paddingBottom: "100px" }
          : undefined
      }
    >
      <h1>
        <span>mu</span>stafa
      </h1>
      <ul>
        <li>
          <Link className="nav-link" to="/">
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
