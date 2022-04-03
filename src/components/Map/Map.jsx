import React from "react";
import css from "./Map.module.css";
import MapElements from "./MapElements/MapElements";

const Map = (props) => {
  // props.MapData.state.ListCountryData.forEach((c) => c.path.forEach());
  // let MapElements = props.MapData.state.MapData.map((m) => (
  //   <React.Fragment key={m.id}>
  //     <path
  //       id={m.id}
  //       d={m.d}
  //       transform="translate(-10.23 -9.62)"
  //       stroke="#f2f2f2"
  //     />
  //   </React.Fragment>
  // ));
  let ListCountryElements = props.MapData.state.ListCountryData.map((c) => (
    <React.Fragment key={c.id}>
      <MapElements
        href={c.href}
        color={c.color}
        path={c.path}
        MapData={props.MapData.state.MapData}
      />
    </React.Fragment>
  ));

  return (
    <div className={css.map}>
      <svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100">
        {ListCountryElements}
      </svg>
    </div>
  );
};

export default Map;
