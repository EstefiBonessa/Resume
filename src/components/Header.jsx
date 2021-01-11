import React from "react";
import s from "../styles/style.module.css";

export default function Header() {
  return (
    <div className={s.header}>
      <div id="img" className={s.img}></div>
      <div className={s.info}>
        <p className={s.nombre}> Estefania Bonessa</p>
        <p className={s.data}> Chacarita, Buenos Aires, Argentina</p>
        <p className={s.data}> estefania.bonessa32@gmail.com</p>
        <p className={s.data}> LinkedIn</p>
        <p className={s.data}> LinkedIn</p>
      </div>
    </div>
  );
}
