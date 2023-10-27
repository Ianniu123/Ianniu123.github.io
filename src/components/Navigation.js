import { AiOutlineLinkedin } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'

const Navigation = ({ project, about, contact, scrollToSection }) => {
  return (   
    <nav className="absolute nav w-full "> {/*fixed*/}
      <div className=" mx-auto p-4 mr-6">
        <div className="hidden justify-end md:flex md:w-auto md:order-1">
          <ul id="nav" className="flex place-items-end md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0" >
            <li>
              <a href="#" onClick={() => scrollToSection(about)} className="rounded border-button md:text-xl lg:text-base">About Me</a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(project)} className="rounded border-button md:text-xl lg:text-base">Projects</a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(contact)} className="rounded border-button md:text-xl lg:text-base">Contact</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yu-zhiyao/" target="_blank">
                <AiOutlineLinkedin className="rounded border-button md:text-xl lg:text-base" id='icon-button' />
              </a>
            </li>
            <li>
              <a href="https://github.com/Ianniu123" target="_blank">
                <VscGithub className="rounded border-button md:text-xl lg:text-base" id='icon-button' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
