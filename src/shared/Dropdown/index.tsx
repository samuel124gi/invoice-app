// import React from "react";
import { Select, Options } from "./styles";
import DropdownImage from "../../assets/icons/dropdown.svg";

export default function Dropdown() {
  return (
    <div>
      <Select>
        <Options>Filter by status</Options>
        <DropdownImage />
      </Select>
    </div>
  );
}
