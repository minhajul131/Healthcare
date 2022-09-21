import React from "react";
import { Link } from "react-router-dom";
import tment from '../../assets/images/treatment.png'
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={tment} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Cavity Protection</h1>
          <p className="py-6">
          Cavity Protection fluoride toothpaste strengthens teeth with active fluoride and fights cavities.
          </p>
          <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
