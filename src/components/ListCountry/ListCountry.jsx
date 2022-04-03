import React from "react";
import css from "./ListCountry.module.css";

const ListCountry = (props) => {
  let ListCountryElements = props.ListCountryData.filter(
    (c) => c.type === "visibl"
  ).map((c) => (
    <React.Fragment key={c.id}>
      <li>
        <a href={c.href} id="ListCountry">
          {c.name}
        </a>
      </li>
    </React.Fragment>
  ));

  return (
    <div className={css.ListCountry}>
      <ul>{ListCountryElements}</ul>
    </div>
  );
};

export default ListCountry;
