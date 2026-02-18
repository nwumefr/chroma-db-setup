import { Link } from 'react-router-dom';
import RMHCLogo from './RMHCLogo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <RMHCLogo className="footer-logo" ariaHidden />
          <span>Ronald McDonald House Charities of the Philadelphia Region</span>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/staying-with-us">Staying with Us</Link></li>
              <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More Information</h4>
            <ul>
              <li><Link to="/tax-information">Tax Information</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-charity">
          We are a four star charity on Charity Navigator. <a href="https://www.charitynavigator.org/" target="_blank" rel="noopener noreferrer">Click here to see the report</a>.
        </p>
        <p className="footer-legal">
          © RMHC 2021. Ronald McDonald House Charities of the Philadelphia Region (EIN: 23-7377505) is recognized as a public charity under Internal Revenue Code section 509(a) and has 501(c)(3) status. Donors should consult their tax advisor for questions regarding deductibility.
        </p>
        <p className="footer-trademark">
          The following trademarks used herein are owned by McDonald's Corporation and its affiliates; McDonald's, Ronald McDonald House Charities, RMHC, Ronald McDonald House, Ronald McDonald Family Room, and Ronald McDonald Care Mobile.
        </p>
      </div>
    </footer>
  );
}
