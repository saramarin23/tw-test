import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from "@material-ui/core";

const Wishlist = props => {
  let i;
  return (
    <ul className="presents-list">
      {props.presents.map(present => {
        return (
          <div className="check-container" key={present.item}>
            <FormControlLabel control={<Checkbox />} />
            <li className="item" index={i}>
              {present.item}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Wishlist;
