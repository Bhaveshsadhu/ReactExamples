import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div classname="homePage">
      <h1>React Examples</h1>
      <ol>
        <li>
          <Link to="/ComponentLifeCycle">Component Life Cycle</Link>
        </li>
        <li>
          <Link to="/UserProfile">User Profile Example - added css</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
