import React,{useEffect}from "react";
import Homeheader from "../../pages/Home/homeheader/homeheader.jsx";
import Homeabout from "../../pages/Home/homeabout/homeabout.jsx";
import Homecard from "./homecard/homecard.jsx";
import Homeselect from "../../pages/Home/homeselect/homeselect.jsx";
import Homeflag from "../../pages/Home/homeflag/homeflag.jsx";
import Homework from "../../pages/Home/homework/homework.jsx";
import Homeslider from "../../pages/Home/homeslider/homeslider.jsx";
import Homenumber from "../../pages/Home/homenumber/homenumber.jsx";
import Homefooter from "../../pages/Home/homefooter/homefooter.jsx";
import { Outlet } from "react-router-dom";
import Homenavbar from "./homenavbar/homenavbar";
import Container from "../../components/container/container.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../responsive/home.scss"
import "../../styles/home.scss";
const Home = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <React.Fragment>
        <Homeheader>
          <Homeselect />
        </Homeheader>
        <Homeabout />
        <Homecard />
        <Homeflag />
        <Homework />
        <Homeslider />
        <Homenumber />
        <Homefooter />
        <Outlet />
    </React.Fragment>
  );
};

export default Home;
