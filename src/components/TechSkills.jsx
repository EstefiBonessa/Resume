import React from "react";
import s from "../styles/style.module.css";
import { useEffect, useState } from "react";
import Pencil from "../Icons/Pencil";

const axios = require("axios").default;
let design;

export default function TechSkills({ setTSkills, tSkills }) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("../../api/English.json").then((ans) => setData(ans.data));
  }, []);

  return (
    <div className={s.blur} onClick={() => setTSkills(!tSkills)}>
      <div className={s.datacont}>
        {data.data ? (
          <p className={s.description}>{data.data[0].tech}</p>
        ) : null}
        <div className={s.grid}>
          {data.data
            ? data.data[0].tskills.map((skill) => (
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
