import "../index.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HomeScreen = () => {
  const { position, mobileView } = useSelector(
    (state: RootState) => state.position
  );
  console.log(position + " " + "mobile view " + mobileView);
  return (
    <>
      <div className="homescreen">
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
      </div>
    </>
  );
};

export default HomeScreen;
