import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg from "../Images/aboutimg.PNG";
import Same from "./Same";

export default function About() {
  return (
    <>
      <Same
        title="About Us"
        text="
        The Company IGV is rooted from South Indian city called Chennai. 
        It will provide the engineering services to the companies in the world for Oil & Gas, Marine,
        Offshore and Residentials projects. 
        It will Engineering services with the softwares. 
        Our services cater to your need at any and all stages of your 
        product development and manufacturing engineering processes. 
        We help commission factories, consult on engineering processes and infrastructure, 
        engineer your technology, integrate electronic with mechanical, design products 
        "
        imgsrc={aboutimg}
      />
    </>
  );
}
