import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../Images/homeimg.PNG";
import "../Css/HomeAbout.css";
import Same from "./Same";

export default function Home() {
  return (
    <>
      <Same
        title="Engineering Startup-IBV"
        text="Ingenenieur Büro Vijay is the company established in the end of year 2022. 
        It will provide the engineering services to the largest companies in the world.
        We will Solve the engineering problems with the technical skills acquired. It was started to 
        manage time and resource effectively
        "
        imgsrc={homeimg}
      />
    </>
  );
}
