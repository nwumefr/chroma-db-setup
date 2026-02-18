import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            Give families<br />Comfort and Hope
          </h1>
          <div className="hero-buttons">
          <Link to="/donate" className="btn btn-hero">Donate today!</Link>
          <Link to="/donate" className="btn btn-hero-outline">Donate</Link>
        </div>
        </div>
      </section>

      <section className="home-cards">
        <div className="home-card">
          <p className="card-label">A star with a heart inside</p>
          <h2>Superstar Sustainers</h2>
          <p>Become a Superstar Sustainer by setting up a recurring gift and help families access care whenever they need it.</p>
          <Link to="/superstars" className="card-link">Click here to learn more.</Link>
        </div>
        <div className="home-card">
          <p className="card-label">food</p>
          <h2>Served with Love</h2>
          <p>Provide the comforts of home to our guest families by preparing and serving delicious meals in our Chestnut Street kitchen.</p>
          <Link to="/servedwithlove" className="card-link">Click here to learn more.</Link>
        </div>
        <div className="home-card">
          <p className="card-label">Drawing on family</p>
          <h2>Donate to Our Wish List</h2>
          <p><strong>Click here to shop and ship items to the House.</strong></p>
          <p><strong>Click here if you'd like to deliver items to the House.</strong></p>
          <Link to="/wishlist" className="card-link">Shop and ship items to the House.</Link>
          <Link to="/wishlist#deliver" className="card-link">Deliver items to the House.</Link>
          <Link to="/shop" className="card-link">Shop RMHC Philly Merchandise</Link>
        </div>
      </section>

      <section className="home-actions">
        <Link to="/get-involved/volunteer" className="action-btn">Volunteer</Link>
        <Link to="/get-involved/events" className="action-btn">Join an Event</Link>
      </section>

      <section className="home-mission">
        <div className="mission-inner">
          <h2>Keeping Families Close®</h2>
          <p>
            Ronald McDonald House Charities® of the Philadelphia Region supports families on their children's medical journey with a community of <strong>comfort and hope</strong>. Our programs include two Ronald McDonald Houses in West and North Philadelphia, three Ronald McDonald Family Rooms at local hospitals, Ronald McDonald Camp, and a Ronald McDonald Care Mobile, operated in partnership with St. Christopher's Foundation for Children.
          </p>
          <h3>What does a community of comfort and hope mean to us?</h3>
          <p>
            At the core of our mission, comfort and hope means that every family we serve, and every staff member, volunteer, and supporter who is part of our community feels respected, cared for, and trusted. The individuals who make up our community represent rich cultural and ethnic backgrounds from around the world and this diversity helps make us stronger. We continuously learn from each other while sharing meaningful experiences every single day.
          </p>
          <Link to="/enews" className="btn btn-secondary">Sign up to receive e-news</Link>
        </div>
      </section>

      <section className="home-social">
        <h3>Connect with us on social media!</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/rmhcphilly" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/rmhcphilly" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/rmhc-philadelphia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/rmhcphilly" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>
    </div>
  );
}
