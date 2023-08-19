import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPosition, setMobileView } from "./slices/positionSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [pageY, setPageY] = useState<number>(0);

  const handleScroll = () => {
    setPageY(Math.floor(window.pageYOffset));
    dispatch(setPosition(Math.floor(window.pageYOffset)));
  };

  window.addEventListener("scroll", handleScroll);

  let mobileView = window.matchMedia("(max-width: 1024px)").matches;
  dispatch(setMobileView(mobileView));

  return (
    <>
      <Header pageY={pageY} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
