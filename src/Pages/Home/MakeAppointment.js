import React from "react";
import doctorimg from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})`}} className="flex justify-content items-center">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctorimg} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className='text-xl text-primary font-bold'>Appointment</h3>
        <h2 className='text-3xl text-white mt-4 mb-4'>Make an Appointment</h2>
        <p className="text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi voluptas numquam, ex suscipit alias dicta soluta rerum vel nemo exercitationem facilis vero odio eos labore est? Quibusdam, laborum minima!</p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
