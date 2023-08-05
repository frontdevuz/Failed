import React from "react";
import { Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const Homecheck = (props) => (
  <Checkbox onChange={onChange} className="number__check">{props.children}</Checkbox>
);
export default Homecheck;
