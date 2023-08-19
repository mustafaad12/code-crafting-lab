import "../index.scss";
// features icons
import { FaCode } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsFileEarmarkText } from "react-icons/bs";
//store
import { useSelector } from "react-redux";
import { RootState } from "../store";
//components
import SideBarIcons from "../components/SideBarIcons";

const HomeScreen = () => {
  const { position, mobileView } = useSelector(
    (state: RootState) => state.position
  );
  console.log(position + " " + "mobile view " + mobileView);

  return (
    <>
      {!mobileView && <SideBarIcons />}
      <div className="homescreen">
        {/* first section title */}

        <div className="title">
          <div className="col">
            <div className="text">
              <h1>
                <span>Code</span> Crafting Lab
              </h1>
              <p>
                Code Crafting Lab is a cutting-edge web development company that
                specializes in creating tailor-made digital solutions that
                seamlessly fuse design, functionality, and innovation. With a
                dedicated team of skilled developers, designers, and creatives,
                we transform ideas into powerful online experiences. Code
                Crafting Lab is driven by a passion for coding excellence and a
                commitment to crafting unique web solutions that empower
                businesses to thrive in the digital landscape.
              </p>

              <a href="">Learn More</a>
            </div>
          </div>
          <div className="col">
            <img src="images/home-1.jpg" alt="" />
          </div>
        </div>

        {/* features section */}
        <div className="features">
          <div className="col">
            <FaCode className="icon" />
            <h2 onClick={() => alert(window.scrollY)}>
              Custom Web Development
            </h2>
          </div>

          <div className="col">
            <RiShoppingCartLine className="icon" />
            <h2>E-Commerce Solutions</h2>
          </div>

          <div className="col">
            <AiOutlineAppstoreAdd className="icon" />
            <h2>Web Application Development</h2>
          </div>

          <div className="col">
            <MdDevices className="icon" />
            <h2>Responsive Design</h2>
          </div>

          <div className="col">
            <IoIosColorPalette className="icon" />
            <h2>UI/UX Design</h2>
          </div>

          <div className="col">
            <BsFileEarmarkText className="icon" />
            <h2>Content Management Systems (CMS)</h2>
          </div>
        </div>

        <div className="mission">
          <div className="col">
            <div
              className="text"
              onClick={(e) => alert(e.pageY)}
              style={
                !mobileView && position > 800
                  ? { marginLeft: 0 }
                  : mobileView && position > 1200
                  ? { marginLeft: 0 }
                  : undefined
              }
            >
              <h1>
                Our mission at <span>Code Crafting Lab</span>
              </h1>
              <p>
                is to revolutionize the web development industry by delivering
                bespoke, user-centric, and technologically advanced web
                solutions. We aim to empower businesses of all sizes to enhance
                their online presence and achieve their goals through innovative
                and effective digital strategies.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className="col">
            <img src="images/home-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
