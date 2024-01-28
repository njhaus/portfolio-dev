import React from 'react'

import Divider from "../../../../components/Divider";

const WelcomePortfolio = () => {
  return (
      <>
        <Divider />
        <h2 className="text-5xl font-medium text-left self-end me-20">
          Work you can trust.
        </h2>
        <p className="mx-12 max-w-2xl">
          The detail and detication I put into my work shows in the final product. I strive to produce comprehensive, easy to maintain applications that deliver an excellent user experience.
        </p>
        <button>View Portfolio</button>
      </>
  );
}

export default WelcomePortfolio
