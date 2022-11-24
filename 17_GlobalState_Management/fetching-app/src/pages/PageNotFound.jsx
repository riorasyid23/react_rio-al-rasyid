import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

function PageNotFound() {
  return (
    <div>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>404 - Universe not found</h2>
          <p>
            The universe you are looking for might have been removed had its
            reality changed or is temporarily unavailable.
          </p>
          <Link to="/">Go To Homepage</Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
