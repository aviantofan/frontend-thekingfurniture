import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

const NavbarUser = () => {    
  const [active, setActive] = useState('/profile')
  const router = useRouter()
  useEffect(() => {
    setActive(router.pathname)
  }, [router.pathname])
  const file = [
    { link: '/profile', name: 'Profile' },
    { link: '/history', name: 'My History' },
  ]
  return (
    <>
      <style jsx>
        {`
                    a{
                        color: rgba(58, 61, 66, 0.4);
                        text-decoration: none;
                        font-size:2rem;
                    }
                    a{
                        color: transparent;
                        margin-bottom:5px;
                    }
                    a.actived{
                        color: #062C30;
                        border-color: #03045E;
                        border-bottom: 4px solid black
                        
                    }
                    a.active{
                        color: #062C30;
                    }
                    
                `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {file.map(item => {
                return (
                  <>
                    <li key={item.name} className="mx-3 d-flex flex-row align-items-center justify-content-between">
                      <a className={active === item.link ? 'active actived nav-link' : 'nav-link'} aria-current="page" href={item.link}>{item.name}</a>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavbarUser