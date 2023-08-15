import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

const LandingLayout = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = "/imgs/landing/landing_background.jpg";
    imageLoader.onload = () => {
      console.log("loaded!!!");
      setBackgroundImage("/imgs/landing/landing_background.jpg");
    };
  }, []);
  return (
    <>
      {backgroundImage !== null && (
        <div className="w-full min-h-screen flex flex-col justify-between bg-[url('/imgs/landing/landing_background.jpg')] bg-cover bg-no-repeat bg-center px-[22px] py-5">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingLayout;
