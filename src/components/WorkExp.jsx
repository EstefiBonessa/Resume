import React from "react";
import s from "../styles/style.module.css";
import { useEffect, useState } from "react";

const axios = require("axios").default;

export default function WorkExp({ setWorks, works }) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("../../api/English.json").then((ans) => setData(ans.data));
  }, []);

  return (
    <div className={s.blur} onClick={() => setWorks(!works)}>
      {data.data ? (
        <div className={s.datacont}>
          <p className={s.description}>{data.data[2].bomba}</p>
          <a target="blank" className={s.link} href={data.data[2].linkbomba}>
            Bomba
          </a>
          <p className={s.description}>{data.data[2].apm}</p>

          <p className={s.description}>{data.data[2].asDesigner}</p>
          <a target="blank" className={s.link} href={data.data[2].link}>
            Portfolio
          </a>
        </div>
      ) : null}
    </div>
  );
}
