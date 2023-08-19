import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <h1>
          <span>C'</span>LAB
        </h1>
      </div>
      <div className="col email">
        <FiMail />
        <a href="mailto: AlDaffaie.Mustafa1997@gmail.com">Contact by email</a>
      </div>
      <div className="col">
        <h2>Powered By Mustafa Aldaffaie</h2>
      </div>
    </footer>
  );
};

export default Footer;
