import React from 'react'

import Divider from "../../../../components/Divider";

const WelcomeAboutMe = () => {
  return (
    <>
      <Divider />
      <h2 className="text-5xl font-medium w-full text-right max-w-2xl">
        Thank you for visiting!
      </h2>
      <p className="mx-8 max-w-2xl">
        I'm excited to work with you. Click below to learn more about me and
        what I have to offer your team.
      </p>
      <button>About Me</button>
    </>
  );
}

export default WelcomeAboutMe
