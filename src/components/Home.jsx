import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contactUs">ContactUs</Link>

      <button Ratish="12">Ratish/2</button>
    </>
  );
};
export default Home;
