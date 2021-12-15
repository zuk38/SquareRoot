import React, { useEffect, useState } from 'react';
import logo from '../../images/logos/logo--dark.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import NavbarDropdown from './NavbarDropdown';
import { Trans, useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';
import { Button, IconButton, Stack, useMediaQuery } from '@mui/material';
import GoIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {
  let navigate = useNavigate();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [navDropdown, setNavDropdown] = useState({
    dropdownAbout: false,
    dropdownGreenspaces: false,
    dropdownContact: false,
  });

  useEffect(() => {
    closeMobileMenu();
  }, [lgUp]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (path) => {
    setClick(false);
    if (path === undefined) return;
    else {
      navigate(path);
      if (path.indexOf('/categories') > -1) navigate.go(0);
    }
  };

  const onMouseEnter = (dropdown) => {
    if (window.innerWidth < 1190) {
      setNavDropdown(false);
    } else {
      setNavDropdown({ [dropdown]: true });
    }
    console.log(dropdown);
  };

  const onMouseLeave = () => {
    setNavDropdown(false);
  };

  return (
    <>
      <nav className='nav'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='SQUAREROOT' />
          </Link>
        </div>
        {click ? (
          <ul className='nav-menu active'>
            {NavbarData.map((item, index) => (
              <>
                {!item.dropdown ? (
                  <NavLink
                    to={item.path}
                    key={item.path}
                    className='nav-links-no-hover'
                    onClick={() => closeMobileMenu(item.path)}
                  >
                    <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                  </NavLink>
                ) : (
                  <div
                    key={index}
                    className='nav-links-no-hover-title'
                    onClick={() => closeMobileMenu(undefined)}
                  >
                    <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                  </div>
                )}
                {item.subtitle &&
                  item.subtitle.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={item.path}
                      className='sub-item'
                      onClick={() => closeMobileMenu(item.path)}
                    >
                      <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    </NavLink>
                  ))}
              </>
            ))}
          </ul>
        ) : (
          <ul className='nav-menu'>
            {NavbarData.map((item, index) =>
              item.dropdown ? (
                <li
                  key={item.path}
                  className='nav-item'
                  onMouseEnter={() => onMouseEnter(item.dropdown)}
                  onMouseLeave={onMouseLeave}
                >
                  <div
                    className='nav-links-no-hover-title'
                    onClick={() => closeMobileMenu(undefined)}
                  >
                    <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    <i className='fas fa-caret-down' />
                  </div>
                  {
                    {
                      dropdownGreenspaces: navDropdown.dropdownGreenspaces && (
                        <NavbarDropdown
                          {...props}
                          item={item}
                          openLink={closeMobileMenu}
                        />
                      ),
                      dropdownAbout: navDropdown.dropdownAbout && (
                        <NavbarDropdown
                          {...props}
                          item={item}
                          openLink={closeMobileMenu}
                        />
                      ),
                      dropdownContact: navDropdown.dropdownContact && (
                        <NavbarDropdown
                          {...props}
                          item={item}
                          openLink={closeMobileMenu}
                        />
                      ),
                    }[item.dropdown]
                  }
                </li>
              ) : (
                <li key={index} className='nav-item'>
                  {!item.dropdown ? (
                    <NavLink
                      to={item.path}
                      className={click ? 'nav-links-no-hover' : 'nav-links'}
                      onClick={() => closeMobileMenu(item.path)}
                    >
                      <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    </NavLink>
                  ) : (
                    <div
                      className={
                        click ? 'nav-links-no-hover-title' : 'nav-links-title'
                      }
                      onClick={() => closeMobileMenu(undefined)}
                    >
                      <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    </div>
                  )}
                </li>
              )
            )}
          </ul>
        )}
        <ul className='navbar-nav'>
          <Stack direction='row' spacing={2}>
            {/*language */}
            <LanguageSelect />
            {/* platform */}
            <Link
              style={{
                textDecoration: 'none',
              }}
              to='/dashboard'
            >
              <Button variant='contained' endIcon={<GoIcon />}>
                Visit Platform
              </Button>
            </Link>

            {/*sidebar*/}
            {lgUp && (
              <IconButton
                aria-label='delete'
                size='large'
                onClick={handleClick}
              >
                {!click ? <MenuIcon /> : <CloseIcon />}
              </IconButton>
            )}
          </Stack>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
