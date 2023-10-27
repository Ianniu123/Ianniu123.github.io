const NavMenu = ({ project, about, contact, scrollToSection, handleClick }) => {
	return (
		<div id='navMobile' className="flex fixed left-28 top-52 flex-col justify-center z-10">
			<button onClick={() => {
				handleClick()
				scrollToSection(about)}
			} className="text-white mb-14 text-5xl">
				About Me
			</button>

			<button onClick={() => {
				handleClick()
				scrollToSection(project)}
			} className="text-white mb-14 text-5xl">
				Projects
			</button>

			<button onClick={() => {
				handleClick()
				scrollToSection(contact)}
			} className="text-white mb-14 text-5xl">
				Contact
			</button>
		</div>
	)
}

export default NavMenu