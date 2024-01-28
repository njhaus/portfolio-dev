import React from 'react'

import Divider from '../../components/Divider'

const Welcome = () => {
  return (
    <section className="h-5/6 mb-8">
      <article className="flex flex-col h-full justify-around items-center">
        <div className='ms-10 pt-8'>
          <h1 className="text-9xl font-extralight ps-16">NICK</h1>
          <h1 className="text-9xl font-medium pe-16">HAUS</h1>
        </div>
        <Divider/>
        <p className="mx-16 max-w-2xl">
          <span>I'm a full-stack web developer</span> with a passion for
          creating beautiful, dynamic, and accessible web applications. I have a
          robust knowledge of many modern web development tools and frameworks.
          I am a proven team player as well as a lifelong learner with excellent
          customer service, teamwork, and organization skills.
        </p>
        <Divider/>
      </article>
    </section>
  );
}

export default Welcome
