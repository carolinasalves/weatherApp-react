import React from "react";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form>
      <div className="p-5">
        <input
          type="text"
          className="city m-2"
          placeholder="🔎 Enter your city"
        />
        <input type="button" className="search-button" value="Search" />
        <input type="button" className="current-button m-2" value="Current" />
      </div>
    </form>
  );
}
