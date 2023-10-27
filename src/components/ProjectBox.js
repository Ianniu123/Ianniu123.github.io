const ProjectBox = ({ project }) => {
	const { name, content, link, start, icon } = project
	const position = start === true ? 'md:items-start' : 'md:items-end'

	return (
		<div className={`flex flex-col ${position} m-6 `}>
    	<a href={link} target='_blank' className="teaser-element-container">
				<div className="flex justfiy-center icon">
					{icon}
				</div>
				<h3 className="flex justify-center md:justify-start">{name}</h3>
				<p className="">
					{content}
					Do veniam fugiat dolore adipisicing et do non.
					Sit veniam elit sint excepteur exercitation consectetur ipsum eiusmod in voluptate sunt ipsum sint.
					Consequat esse duis incididunt est anim aliqua do nostrud laboris.
				</p>
    	</a>
    </div>
	)
}

export default ProjectBox
