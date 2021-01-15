import React from "react";
import s from "../styles/style.module.css";
import { useState } from "react";
import Sun from "../Icons/Sun";
import Moon from "../Icons/Moon";
import Design from "../Icons/Design";
import Tools from "../Icons/Tools";
import Plane from "../Icons/Plane";
import Header from "./Header";
import DesignSkills from "./DesignSkills";
import TechSkills from "./TechSkills";
import Code from "../Icons/Code";
import WorkExp from "./WorkExp";
import Contact from "./Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Page() {
  const [mode] = useState(false);
  const [dSkills, setDSkills] = useState(false);
  const [tSkills, setTSkills] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);

  const handleMode = (e) => {
    toast.dark("This will be the light mode", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      zIndex: 30000,
    });
  };

  return (
    <div className={mode ? s.fondo : s.fondos}>
      <Header></Header>
      <div className={s.body}>
        <p className={s.p}>Hi! I am</p>
        <h1 className={s.title}> Estefi</h1>
        <p className={s.p}>Full Stack Web Developer</p>
        <button className={s.mode} onClick={() => handleMode()}>
          {mode ? (
            <Sun color="white" size="50" />
          ) : (
            <Moon color="white" size="40" />
          )}
        </button>

        <div className={s.descriptionCont}>
          <p className={s.description}>
            Passionate about design with +10years of experience working as Set
            and Costume Designer in Theatre and Advertising. Nowadays starting
            my journey through Web Development with solid knowledge in Front End
            and Back End.
          </p>
        </div>
        <div className={s.skillsCont}>
          <div className={s.skills} onClick={() => setDSkills(!dSkills)}>
            {dSkills ? (
              <DesignSkills setDSkills={setDSkills} dSkills={dSkills} />
            ) : null}
            <p className={s.text}>Design Skills</p>
            <Design color="white" size="70"></Design>
          </div>
          <div className={s.skills} onClick={() => setTSkills(!tSkills)}>
            {tSkills ? (
              <TechSkills setTSkills={setTSkills} tSkills={tSkills} />
            ) : null}
            <p className={s.text}>Tech Skills </p>
            <Tools color="white" size="60"></Tools>
          </div>
          <div className={s.skills} onClick={() => setWorks(!works)}>
            {works ? <WorkExp setWorks={setWorks} works={works} /> : null}
            <p className={s.text}>Work Experience</p>
            <Code color="white" size="75" />
          </div>
          <div className={s.skills} onClick={() => setContact(true)}>
            {contact ? (
              <Contact setContact={setContact} contact={contact} />
            ) : null}
            <p className={s.text}>Contact</p>
            <Plane color="white" size="70" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
