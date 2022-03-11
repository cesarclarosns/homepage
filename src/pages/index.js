import React, { useRef, useLayoutEffect } from "react";
import {} from "@chakra-ui/react";

import Intro from "../components/intro";
import Bio from "../components/bio";
import Projects from "../components/projects";
import Contact from "../components/contact";
import MyStack from "../components/myStack";
import Header from "../components/header";
import Footer from "../components/footer";

function HomePage() {
  const bioRef = useRef(null);
  const myStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    bioRef,
    myStackRef,
    projectsRef,
    contactRef,
  };

  return (
    <>
      <Header {...refs} />
      <Intro />
      <Bio bioRef={bioRef} />
      <MyStack myStackRef={myStackRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default HomePage;
