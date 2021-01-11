import React from "react";
import s from "../styles/style.module.css";
import { useEffect, useState } from "react";
import Pencil from "../Icons/Pencil";

const axios = require("axios").default;
let design;

export default function DesignSkills({ setDSkills, dSkills }) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("../../api/English.json").then((ans) => setData(ans.data));
  }, []);

  return (
    <div className={s.blur} onClick={() => setDSkills(!dSkills)}>
      <div className={s.datacont}>
        {data.data ? (
          <p className={s.description}>{data.data[0].design}</p>
        ) : null}

        <div className={s.grid}>
          {data.data
            ? data.data[0].skills.map((skill) => (
                <p className={s.dskills}>
                  <Pencil size="20" />
                  {skill}
                </p>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
