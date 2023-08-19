import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SideBarIcons = () => {
  return (
    <>
      <div className="side-bar-icons">
        <FaFacebookSquare className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
        <FaGithub className="icon" />
      </div>
    </>
  );
};

export default SideBarIcons;
