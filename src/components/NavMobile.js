import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import NavMenu from './NavMenu'

const NavMobile = ({ project, about, contact, scrollToSection }) => {
	const [showMenu, setShowMenu] = useState(false)

	const handleClick = () => {
		if (showMenu) {
			document.body.style.overflow = 'unset'
			document.getElementById('home').style.opacity = '1'
			document.getElementById('about').style.opacity = '1'
			document.getElementById('project').style.opacity = '1'
			document.getElementById('back').style.opacity = '1'
		} else {
			document.getElementById('home').style.opacity = '0'
			document.getElementById('about').style.opacity = '0'
			document.getElementById('project').style.opacity = '0'
			document.getElementById('back').style.opacity = '0'
			document.body.style.overflow = 'hidden'
		}
		setShowMenu(!showMenu)
	}
	
	const menu = showMenu ? <NavMenu handleClick={handleClick} scrollToSection={scrollToSection} about={about} project={project} contact={contact} /> : ''

	return (
		<div className="flex-col flex" id='navMobile'>
			<FaBars onClick={handleClick} className='flex right-4 top-4 h-10 w-10 fixed z-10'/>
			{menu}
		</div>
	)
}

export default NavMobile