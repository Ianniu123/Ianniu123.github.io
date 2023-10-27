import { motion } from 'framer-motion'

const Home = () => {

  return (
    <div className="">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{duration: 0.5}}
      >
        <p><br></br></p>
        <h1 className='mt-56 md:mt-64 lg:mt-56 justify-center items-center flex' id="intro">Hi, I am</h1>
        <h1 id="intro" className="justify-center flex">Zhiyao Yu</h1>
        <p className="text-[#ced4d8] flex justify-center md:md:text-2xl lg:text-xl">
          Welcome to my website!
        </p>
      </motion.div>
    </div>
  )
}

export default Home