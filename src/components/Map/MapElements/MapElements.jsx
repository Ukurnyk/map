import React from "react";
import css from "./MapElements.module.css";

const MapElements = (props) => {
  let parth = [];
  props.path.forEach((p) =>
    props.MapData.forEach((m) => {
      if (m.id === p) parth.push(m);
    })
  );
  let m = parth.map((m) => (
    <React.Fragment key={m.id}>
      <path
        id={m.id}
        d={m.d}
        // transform="translate(-10.23 -9.62)"
        fill={props.color}
        stroke="#f2f2f2"
      />
    </React.Fragment>
  ));
  return (
    <a href={props.href} data-color={props.color} className={css.mapLink}>
      {m}
    </a>
  );
};

export default MapElements;
