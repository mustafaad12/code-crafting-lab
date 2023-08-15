import "../index.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HomeScreen = () => {
  const { position } = useSelector((state: RootState) => state.position);
  // console.log(position);
  return (
    <>
      <div className="home">HomeScreen++</div>
    </>
  );
};

export default HomeScreen;
