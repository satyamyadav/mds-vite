import React from 'react';
import { Avatar, Text, Divider, Link } from '@innovaccer/design-system';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  // Handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '47px', overflow: 'hidden' }}>
      <nav
        role="navigation"
        className="d-flex flex-nowrap flex-row align-items-center pl-4 pr-5 border-bottom justify-content-between bg-light w-100"
      >
        <div className="d-flex flex-nowrap flex-row align-items-center">



          {/* logo */}
          <div className="d-flex align-items-center justify-content-center px-3">
            <Link href="/overview" className="mx-3 border-0">
              <img
                style={{ height: 'auto', width: '20px' }}
                src={'https://cdn.prod.website-files.com/670e4ade75003c7364a3944d/670e5a8c26a4d429b1dc7393_innovaccer-logo.svg'}
                alt="Innovaccer"
              />
            </Link>
          </div>
          {/* app menu */}


          <div className="pl-3 pr-6 border-right">
            <Text appearance="subtle">Innovaccer</Text>
          </div>
          <Divider vertical />
          <div className="Listbox flex-row">
            <a className="Listbox-item Listbox-item--standard Listbox-item--option py-4 px-5 mx-2" style={{ textDecoration: 'none' }}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation('/')
              }}
              href={'/'}
            >
              Home
            </a>
            <a className=" Listbox-item Listbox-item--standard Listbox-item--option py-4 px-5 mx-2 " style={{ textDecoration: 'none' }}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation('/dashboard')
              }}
              href={'/dashboard'}
            >
              Dashboard
            </a>
          </div>
        </div>
        <div>
          <Avatar
            withTooltip={false}
            size="tiny"
            firstName={'satyam'}
            lastName={'yadav'}
            className="cursor-pointer"
          />

        </div>
      </nav>
    </div>
  );
};

export default NavBar; 