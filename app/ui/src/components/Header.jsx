import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RMHCLogo from './RMHCLogo';
import './Header.css';

const navItems = [
  {
    label: 'About Us',
    path: '/about-us',
    children: [
      { label: 'About Us', path: '/about-us' },
      { label: 'Our Impact', path: '/about-us/our-impact' },
      { label: "How Does McDonald's Help?", path: '/about-us/how-mcdonalds-helps' },
      { label: 'Board of Directors', path: '/about-us/board-of-directors' },
      { label: 'Leadership Team', path: '/about-us/leadership-team' },
      { label: 'Join our Team', path: '/about-us/join-our-team' },
    ],
  },
  {
    label: 'Staying with Us',
    path: '/staying-with-us',
    children: [
      { label: 'Request a Room', path: '/staying-with-us/request-a-room' },
      { label: 'Family Support Services', path: '/staying-with-us/family-support-services' },
      { label: 'Support a Current Family', path: '/staying-with-us/support-a-family' },
    ],
  },
  {
    label: 'Get Involved',
    path: '/get-involved',
    children: [
      { label: 'Volunteer', path: '/get-involved/volunteer' },
      { label: 'Events', path: '/get-involved/events' },
      { label: 'Ways to Give', path: '/get-involved/ways-to-give' },
    ],
  },
  {
    label: 'Camp',
    path: '/camp',
    children: [
      { label: 'Camp', path: '/camp' },
      { label: 'Donate to RMC', path: '/camp/donate' },
      { label: 'Ronald McDonald Family Camp', path: '/camp/family-camp' },
      { label: 'Volunteer Counselor Application', path: '/camp/volunteer-counselor' },
    ],
  },
  { label: 'Donate', path: '/donate' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Ronald McDonald House Charities of the Philadelphia Region - Home">
          <RMHCLogo className="logo-svg" ariaHidden />
          <span className="logo-text">
            <span className="logo-org">Ronald McDonald House Charities</span>
            <span className="logo-region">of the Philadelphia Region</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`nav-item ${item.children ? 'has-dropdown' : ''} ${openMenu === item.path ? 'open' : ''}`}
                onMouseEnter={() => item.children && setOpenMenu(item.path)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.children ? (
                  <>
                    <span className="nav-link nav-trigger">{item.label}</span>
                    <ul className="dropdown">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className={`dropdown-link ${location.pathname === child.path ? 'active' : ''}`}
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={openMenu === 'mobile'}
          aria-label="Toggle menu"
          onClick={() => setOpenMenu(openMenu === 'mobile' ? null : 'mobile')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-nav ${openMenu === 'mobile' ? 'open' : ''}`}>
        {navItems.map((item) => (
          <div key={item.path} className="mobile-nav-block">
            {item.children ? (
              <>
                <span className="mobile-nav-label">{item.label}</span>
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className="mobile-nav-link sub"
                    onClick={() => setOpenMenu(null)}
                  >
                    {child.label}
                  </Link>
                ))}
              </>
            ) : (
              <Link to={item.path} className="mobile-nav-link" onClick={() => setOpenMenu(null)}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
