import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Wave } from "../../assets/wave.svg";
import "./styles.css";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <h1>Welcome to iHeart</h1>
      <Link className="link" to="/songs">See songs</Link>
      <Wave className="wave" />
    </div>
  );
};

export default HomePage;
