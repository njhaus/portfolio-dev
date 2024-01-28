import React from 'react'
import Divider from '../../../../components/Divider'

const Home = () => {
  return (
    <>
      <div className="ms-10 pt-8">
        <h1 className="text-9xl font-extralight ps-16">NICK</h1>
        <h1 className="text-9xl font-medium pe-16">HAUS</h1>
      </div>
      <Divider />
      <p className="mx-16 max-w-2xl">
        <span className="font-semibold">I'm a full-stack web developer</span>{" "}
        with a passion for creating beautiful, dynamic, and accessible web
        applications and a robust knowledge of many modern web development tools
        and frameworks. I am a proven team player as well as a lifelong learner
        with excellent customer service, teamwork, and organization skills.
        Scroll down to learn more!
      </p>
      <button>Contact Me</button>
    </>
  );
}

export default Home
