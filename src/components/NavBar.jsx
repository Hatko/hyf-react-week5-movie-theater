import { Link } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movies?genre=horror"}>Horror</Link>
        </li>
        <li>
          <Link to={"/movies?genre=thriller"}>Thriller</Link>
        </li>
        <li>
          <Link to={"/movies?genre=supernatural"}>Supernatural</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};
