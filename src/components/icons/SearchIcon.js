import React from "react";
import { MdSearch } from "react-icons/md";
import "../../css/TodoIcon.css";

function SearchIcon() {
  return (
    <span className={`Icon-container Icon-container--search`}>
      <MdSearch color="grey" />
    </span>
  );
}

export { SearchIcon };
