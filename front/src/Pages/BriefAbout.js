import React from "react";
import about1 from "./2.jpg";

export default function BriefAbout () {
  return (
    <>
      <>
        <div className="md:container md:mx-auto flex my-5 items-center pre-BriefAbout-text ">
          <div className="BriefAbout-text">
            <h2 className="font-bold text-2xl py-5 mx-10">Welcome to our To-Do Website!</h2>
            <p className="mx-10">
              At our To-Do Website, we believe that organization is the key to
              success, and we are here to help you stay on top of your tasks and
              maximize your productivity. Whether you're a student, a
              professional, a busy parent, or anyone with a busy schedule, our
              platform is designed to simplify your life and empower you to
              accomplish your goals efficiently.
            </p>
            <br />
            <br />

            <p className="mx-10">
              Our mission is to provide you with a user-friendly and intuitive
              tool that allows you to manage your tasks and stay organized with
              ease. With our website, you can create, track, and prioritize your
              to-do lists, ensuring that nothing falls through the cracks.
              Whether it's a simple grocery list, a complex project plan, or a
              set of daily reminders, our platform adapts to your needs and
              helps you stay focused on what truly matters.
            </p>
          </div>
          <div className="about-img">
            <img src={about1} alt="about1" />
          </div>
        </div>
      </>
    </>
  );
};