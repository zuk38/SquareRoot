import React from 'react';

export default function LeftMenu(props) {
  let currentLocation = props.location.pathname,
    delimiter = '/',
    tokensAfter = currentLocation.split(delimiter).slice(2), //project name
    resultAfter = delimiter + tokensAfter.join(delimiter);

  const locations = [
    {
      pahtname: '/dashboard',
      icon: 'fas fa-columns',
      display: 'Dashboard',
    },
    {
      pahtname: '/members',
      icon: 'fas fa-users',
      display: 'Medlemmer',
    },
    {
      pahtname: '/orders',
      icon: 'fas fa-tasks',
      display: 'Bestillinger',
    },
    {
      pahtname: '/settings',
      icon: 'fas fa-cog',
      display: 'Innstillinger',
    },
  ];

  return (
    <>
      <div className='left-menu'>
        <a href='/projects' className='btn-back'>
          <i className='fas fa-chevron-left' />
          Alle Prosjekter
        </a>
        <div className='menu-vertical'>
          {locations.map((location, index) => (
            <p
              key={index}
              className={
                props.currentPage === location.pahtname ? 'active' : ''
              }
              onClick={() => props.setCurrentPage(location.pahtname)}
            >
              <i className={location.icon} />
              {location.display}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
