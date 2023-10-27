import React from 'react'
import Image from 'react-bootstrap/Image';
import image from '../assets/robot.png'
import TabButton from './TabButton';
import { useState } from 'react'

const About = ({ children }) => {
  const [curTab, setCurTab] = useState("skills")

  const tabs = [
    {
      id: "skills",
      content: "Do veniam fugiat dolore adipisicing et do non. Sit veniam elit sint excepteur exercitation consectetur ipsum eiusmod in voluptate sunt ipsum sint. Consequat esse duis incididunt est anim aliqua do nostrud laboris.",
    },
    {
      id: "education",
      content: "my education",
    }
  ]

  const handleSelect = (tab) => {
    setCurTab(tab)
  }

  return (
    <div className="text-white pt-16">
      <div className="flex-col flex lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:p-20">
        <div className="flex justify-center lg:justify-start">
          <Image src={image} className="w-64 h-64 md:w-2/5 md:h-auto lg:w-4/5 lg:h-auto" thumbnail />
        </div>
        <div className="md:flex md:flex-col md:h-full">
          <h2 className="justify-center flex mt-10 text-3xl lg:mt-0 lg:text-xl lg:justify-start md:text-3xl xl:text-3xl">About Me</h2>
          <p className="sm:ml-28 sm:mr-28 pt-4 lg:mr-24 text-justify text-base ml-12 mr-12 flex justify-center lg:text-base lg:ml-0 lg:justify-start xl:mr-44 md:text-xl xl:text-lg">
            Do veniam fugiat dolore adipisicing et do non.
            Sit veniam elit sint excepteur exercitation consectetur ipsum eiusmod in voluptate sunt ipsum sint.
            Consequat esse duis incididunt est anim aliqua do nostrud laboris.
          </p>
          <div className="mt-20 flex flex-row justify-center lg:justify-start lg:mt-8">
            <TabButton active={curTab === 'skills'} selectTab={handleSelect} name='Skills' />
            <TabButton active={curTab === 'education'} selectTab={handleSelect} name='Education' />
          </div>
          <div className="mt-4 flex sm:ml-28 sm:mr-28 lg:mr-24 ml-12 h-48 mr-12 text-justify justify-center md:text-base lg:text-base xl:text-xl lg:mt-8 lg:justify-start lg:ml-0 xl:mr-44 lg:h-0">
            {tabs.find((t) => t.id === curTab).content}
          </div>
        </div>
        <div className="justify-center flex col-span-2 lg:mt-16 xl:mt-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export default About