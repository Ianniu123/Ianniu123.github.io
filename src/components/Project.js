import ProjectBox from './ProjectBox'
import { AiOutlineSchedule } from 'react-icons/ai'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Project = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }

  const projects = [
    {
      name: "Project 1",
      content: "My Project 1",
      link: "https://github.com/",
      start: false,
      icon: <AiOutlineSchedule />,
    },
    {
      name: "Project 2",
      content: "My Project 2",
      link: "https://github.com/",
      start: true,
      icon: <AiOutlineSchedule />,
    },
    {
      name: "Project 3",
      content: "My Project 3",
      link: "https://github.com/",
      start: false,
      icon: <AiOutlineSchedule />,
    },
    {
      name: "Project 4",
      content: "My Project 4",
      link: "https://github.com/",
      start: true,
      icon: <AiOutlineSchedule />,
    }
  ]

  return (
		<section ref={ref}>
			<div className="">
				<h1 className="flex items-center justify-center text-4xl mb-2">My Projects</h1>
        <div className="flex-col md:grid md:grid-cols-2 md:grid-rows-2">
            {projects.map((project, index) => {
              return ( 
                <motion.li 
                  key={index} 
                  variants={variants} 
                  initial='initial' 
                  animate={isInView ? 'animate' : 'initial'}
                  transition={{ duration: 8, delay: index * 1 }}
                >
                  <ProjectBox 
                    project={project} 
                  />
                </motion.li>
              )
            })}
        </div>
      </div>
		</section>
  )
}

export default Project