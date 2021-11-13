import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <h1>Welcome to iHeart</h1>
      <Link to="/songs">See the songs</Link>
    </div>
  );
};

export default HomePage;
