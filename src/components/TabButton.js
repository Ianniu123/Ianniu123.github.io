import { motion } from 'framer-motion'

const variants = {
	default : { width: 0 },
	active : { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, name }) => {
	const buttonClasses = active ? "text-white" : "text-[#ADB7BE]"

	return (
		<div className="mr-4">
			<button onClick={() => selectTab(name.toLowerCase())} className={`md:text-xl xl:text-xl lg:text-lg hover:text-white ${buttonClasses}`}>
				<p className="mr-3">{name}</p>
				<motion.div 
					animate={active ? "active" : "default"} 
					variants={variants}
					className="h-1 mt-2 mr-3 bg-yellow-300" 
				></motion.div>
			</button>
		</div>
	)
}

export default TabButton
