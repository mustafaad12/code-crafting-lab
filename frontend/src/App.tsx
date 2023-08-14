import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const [pageY, setPageY] = useState<number>(0);

  const handleScroll = () => {
    setPageY(Math.floor(window.pageYOffset));
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Header pageY={pageY} />
      <Outlet />
    </>
  );
};

export default App;
