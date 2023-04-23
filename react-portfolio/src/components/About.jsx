import React from 'react'
import portrait from '../assets/images/portrait-cropped.png'

const About = () => {
  return (
    <div className='mt-20 mb-20'>
      <hr className='mb-10'/>
      <h1 className='text-3xl font-bold text-center mb-10'>About Me</h1>
      <div className='flex flex-col md:flex-row justify-center items-center text-gray-300'>
        <div className='flex-col text-2xl max-w-2xl text-center md:text-left'>
          <p className='mb-5'>Hi 👋, my name is Jeremy and I am a young aspiring learner, with a passion for <strong className='text-white'>Software Engineering</strong> and <strong className='text-white'>Design</strong>.</p>
          <p className='mb-2'>I am currently:</p>
          <ul className='list-disc'>
            <li className='inline-flex'>
              <p>•&nbsp; Studying Computer Science</p>
              <a className='font-bold text-white' href="https://au.linkedin.com/school/unsw/" target="_blank"
              >&nbsp;@ UNSW</a>
            </li><br />
            <li className='inline-flex'>
              <p>•&nbsp; Software Engineer</p>
              <a className='font-bold text-white' href="https://www.sunswift.com/" target="_blank"
              >&nbsp;@ Sunswift Racing</a>
            </li><br />
            <li className='inline-flex'>
              <p>•&nbsp; IT Director</p>
              <a className='font-bold text-white' href="https://www.unswdigitalsociety.org/about" target="_blank"
              >&nbsp;@ UNSW Digital Society </a>
            </li><br />
          </ul>
          <p className='mt-5 mb-2'>In my free time I like to:</p>
          <ul>
            <li>
              <p>•&nbsp; Read Books 📚</p>
            </li>
            <li>
              <p>•&nbsp; Lift Weights 🏋️‍♂️</p>
            </li>
            <li>
              <p>•&nbsp; Walk my dog 🐕</p>
            </li>
            <li>
              <p>•&nbsp; Play Games 👾</p>
            </li>
          </ul>
        </div>
        <div>
          <img className='mt-10 md:mt-0' src={portrait} alt="portrait pic" />
        </div>
      </div>
    </div>
  )
}

export default About